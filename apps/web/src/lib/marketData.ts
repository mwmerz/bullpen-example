import axios from "axios";

interface Asset {
  name: string;
  maxLeverage: number;
}

interface AssetContext {
  markPx: string;
  prevDayPx: string;
  dayNtlVlm: string;
  funding: string;
  openInterest: string;
}

interface MetaResponse {
  universe: Asset[];
}

interface SpotToken {
  name: string;
  szDecimals: number;
}

interface SpotPair {
  tokens: [number, number];
  name: string;
  index: number;
  isCanonical: boolean;
}

interface SpotMetaResponse {
  tokens: SpotToken[];
  universe: SpotPair[];
}

interface SpotAssetContext {
  dayNtlVlm: string;
  markPx: string;
  midPx: string;
  prevDayPx: string;
  circulatingSupply: string;
}

export interface MarketDataItem {
  pair: string;
  leverage: number;
  lastPrice: number;
  change24h: number;
  change24hAmount: number;
  volume24h: number;
  funding8h: number;
  openInterestMarketCap: number;
  image: string;
}

export async function fetchPerpsData(): Promise<MarketDataItem[]> {
  try {
    const response = await axios.post("https://api.hyperliquid.xyz/info", {
      type: "metaAndAssetCtxs",
    });
    const [meta, assetCtxs]: [MetaResponse, AssetContext[]] = response.data;
    return meta.universe.map((asset: Asset, index: number) => {
      const ctx = assetCtxs[index];
      const markPx = parseFloat(ctx.markPx);
      const prevDayPx = parseFloat(ctx.prevDayPx);

      const change24hAmount = markPx - prevDayPx;
      const change24h = prevDayPx !== 0 ? (markPx - prevDayPx) / prevDayPx : 0;

      return {
        pair: `${asset.name}-USD`,
        leverage: asset.maxLeverage,
        lastPrice: markPx,
        change24h,
        change24hAmount,
        volume24h: parseFloat(ctx.dayNtlVlm),
        funding8h: parseFloat(ctx.funding),
        openInterestMarketCap: parseFloat(ctx.openInterest) * markPx,
        image: `https://app.hyperliquid.xyz/coins/${asset.name}.svg`,
      };
    });
  } catch (error) {
    console.error("Error fetching perps data:", error);
    return [];
  }
}

export async function fetchSpotData(): Promise<MarketDataItem[]> {
  try {
    const requestPayload: {
      type: string;
      startTime?: number;
    } = {
      type: "spotMetaAndAssetCtxs",
    };

    const response = await axios.post(
      "https://api.hyperliquid.xyz/info",
      requestPayload
    );
    const [meta, assetCtxs]: [SpotMetaResponse, SpotAssetContext[]] =
      response.data;

    const MIN_VOLUME_THRESHOLD = 10000;

    const results = meta.universe
      .map((pair: SpotPair, index: number) => {
        const ctx = assetCtxs[index];
        const token0 = meta.tokens[pair.tokens[0]];
        const token1 = meta.tokens[pair.tokens[1]];

        const baseToken = token0.name === "USDC" ? token1 : token0;
        const quoteToken = token0.name === "USDC" ? token0 : token1;

        const markPx = parseFloat(ctx.markPx);
        const prevDayPx = parseFloat(ctx.prevDayPx);
        const change24hAmount = markPx - prevDayPx;
        const change24h =
          prevDayPx !== 0 ? (markPx - prevDayPx) / prevDayPx : 0;

        const volume24h = parseFloat(ctx.dayNtlVlm);

        return {
          pair: `${baseToken.name}-${quoteToken.name}`,
          leverage: 1,
          lastPrice: markPx,
          change24h,
          change24hAmount,
          volume24h,
          funding8h: 0,
          openInterestMarketCap: parseFloat(ctx.circulatingSupply) * markPx,
          image: `https://app.hyperliquid.xyz/coins/${baseToken.name}_USDC.svg`,
        };
      })
      .filter((item) => item.volume24h > MIN_VOLUME_THRESHOLD);

    return results;
  } catch (error) {
    console.error("Error fetching spot data:", error);
    return [];
  }
}
