import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import {
  fetchPerpsData,
  fetchSpotData,
  type MarketDataItem,
} from "./marketData";

vi.mocked(axios.post);

describe("marketData", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("fetchPerpsData", () => {
    it("should successfully fetch perps data and return at least one item", async () => {
      const mockResponse = {
        data: [
          {
            universe: [
              {
                name: "BTC",
                maxLeverage: 10,
              },
              {
                name: "ETH",
                maxLeverage: 5,
              },
            ],
          },
          [
            {
              markPx: "45000.50",
              prevDayPx: "44000.00",
              dayNtlVlm: "1000000.00",
              funding: "0.0001",
              openInterest: "500.00",
            },
            {
              markPx: "3000.25",
              prevDayPx: "2900.00",
              dayNtlVlm: "500000.00",
              funding: "0.0002",
              openInterest: "1000.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchPerpsData();

      // Verify axios was called with correct parameters
      expect(axios.post).toHaveBeenCalledWith(
        "https://api.hyperliquid.xyz/info",
        {
          type: "metaAndAssetCtxs",
        }
      );

      // Verify we got at least one result
      expect(result).toHaveLength(2);
      expect(result.length).toBeGreaterThan(0);

      // Verify the structure of the first item
      const firstItem = result[0];
      expect(firstItem).toMatchObject({
        pair: "BTC-USD",
        leverage: 10,
        lastPrice: 45000.5,
        change24h: expect.any(Number),
        change24hAmount: expect.any(Number),
        volume24h: 1000000.0,
        funding8h: 0.0001,
        openInterestMarketCap: expect.any(Number),
        image: "https://app.hyperliquid.xyz/coins/BTC.svg",
      });

      // Verify the structure of the second item
      const secondItem = result[1];
      expect(secondItem).toMatchObject({
        pair: "ETH-USD",
        leverage: 5,
        lastPrice: 3000.25,
        change24h: expect.any(Number),
        change24hAmount: expect.any(Number),
        volume24h: 500000.0,
        funding8h: 0.0002,
        openInterestMarketCap: expect.any(Number),
        image: "https://app.hyperliquid.xyz/coins/ETH.svg",
      });

      // Verify calculated values are correct
      expect(firstItem.change24h).toBeCloseTo(0.0228, 1); // (45000.5 - 44000) / 44000
      expect(firstItem.change24hAmount).toBe(1000.5);
      expect(firstItem.openInterestMarketCap).toBe(22500250); // 500 * 45000.5

      expect(secondItem.change24h).toBeCloseTo(0.0346, 1); // (3000.25 - 2900) / 2900
      expect(secondItem.change24hAmount).toBe(100.25);
      expect(secondItem.openInterestMarketCap).toBe(3000250); // 1000 * 3000.25
    });

    it("should handle malformed API responses gracefully", async () => {
      // Test with missing or malformed data
      const mockResponse = {
        data: [
          {
            universe: [
              {
                name: "BTC",
                maxLeverage: 10,
              },
            ],
          },
          [
            {
              markPx: "invalid", // Invalid number
              prevDayPx: "44000.00",
              dayNtlVlm: "1000000.00",
              funding: "0.0001",
              openInterest: "500.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchPerpsData();

      expect(result).toHaveLength(1);
      expect(result[0].lastPrice).toBeNaN();
      expect(result[0].change24hAmount).toBeNaN();
      expect(result[0].volume24h).toBe(1000000.0);
    });

    it("should handle empty API responses", async () => {
      const mockResponse = {
        data: [
          {
            universe: [],
          },
          [],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchPerpsData();

      expect(result).toEqual([]);
    });

    it("should handle mismatched array lengths", async () => {
      const mockResponse = {
        data: [
          {
            universe: [
              {
                name: "BTC",
                maxLeverage: 10,
              },
            ],
          },
          [], // Empty asset contexts
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchPerpsData();

      expect(result).toEqual([]);
    });

    it("should handle zero previous day price correctly", async () => {
      const mockResponse = {
        data: [
          {
            universe: [
              {
                name: "NEW",
                maxLeverage: 1,
              },
            ],
          },
          [
            {
              markPx: "100.00",
              prevDayPx: "0.00",
              dayNtlVlm: "100.00",
              funding: "0.0001",
              openInterest: "10.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchPerpsData();

      expect(result).toHaveLength(1);
      expect(result[0].change24h).toBe(0);
      expect(result[0].change24hAmount).toBe(100);
    });

    it("should handle API errors gracefully", async () => {
      vi.mocked(axios.post).mockRejectedValue(new Error("API Error"));

      const result = await fetchPerpsData();

      expect(result).toEqual([]);
    });

    it("should handle network timeout errors", async () => {
      vi.mocked(axios.post).mockRejectedValue(new Error("timeout"));

      const result = await fetchPerpsData();

      expect(result).toEqual([]);
    });
  });

  describe("fetchSpotData", () => {
    it("should successfully fetch spot data and return at least one item", async () => {
      // Mock successful API response
      const mockResponse = {
        data: [
          {
            tokens: [
              { name: "USDC", szDecimals: 6 },
              { name: "BTC", szDecimals: 8 },
              { name: "ETH", szDecimals: 8 },
            ],
            universe: [
              {
                tokens: [1, 0], // BTC-USDC
                name: "BTC-USDC",
                index: 0,
                isCanonical: true,
              },
              {
                tokens: [2, 0], // ETH-USDC
                name: "ETH-USDC",
                index: 1,
                isCanonical: true,
              },
            ],
          },
          [
            {
              dayNtlVlm: "500000.00",
              markPx: "45000.50",
              midPx: "45000.50",
              prevDayPx: "44000.00",
              circulatingSupply: "1000.00",
            },
            {
              dayNtlVlm: "300000.00",
              markPx: "3000.25",
              midPx: "3000.25",
              prevDayPx: "2900.00",
              circulatingSupply: "5000.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchSpotData();

      // Verify axios was called with correct parameters
      expect(axios.post).toHaveBeenCalledWith(
        "https://api.hyperliquid.xyz/info",
        {
          type: "spotMetaAndAssetCtxs",
        }
      );

      // Verify we got at least one result
      expect(result).toHaveLength(2);
      expect(result.length).toBeGreaterThan(0);

      // Verify the structure of the first item
      const firstItem = result[0];
      expect(firstItem).toMatchObject({
        pair: "BTC-USDC",
        leverage: 1,
        lastPrice: 45000.5,
        change24h: expect.any(Number),
        change24hAmount: expect.any(Number),
        volume24h: 500000.0,
        funding8h: 0,
        openInterestMarketCap: expect.any(Number),
        image: "https://app.hyperliquid.xyz/coins/BTC_USDC.svg",
      });

      // Verify the structure of the second item
      const secondItem = result[1];
      expect(secondItem).toMatchObject({
        pair: "ETH-USDC",
        leverage: 1,
        lastPrice: 3000.25,
        change24h: expect.any(Number),
        change24hAmount: expect.any(Number),
        volume24h: 300000.0,
        funding8h: 0,
        openInterestMarketCap: expect.any(Number),
        image: "https://app.hyperliquid.xyz/coins/ETH_USDC.svg",
      });

      // Verify calculated values are correct
      expect(firstItem.change24h).toBeCloseTo(0.0228, 1);
      expect(firstItem.change24hAmount).toBe(1000.5);
      expect(firstItem.openInterestMarketCap).toBe(45000500); // 1000 * 45000.5

      expect(secondItem.change24h).toBeCloseTo(0.0346, 1);
      expect(secondItem.change24hAmount).toBe(100.25);
      expect(secondItem.openInterestMarketCap).toBe(15001250); // 5000 * 3000.25
    });

    it("should handle USDC as first token correctly", async () => {
      const mockResponse = {
        data: [
          {
            tokens: [
              { name: "USDC", szDecimals: 6 },
              { name: "BTC", szDecimals: 8 },
            ],
            universe: [
              {
                tokens: [0, 1], // USDC-BTC (USDC first)
                name: "USDC-BTC",
                index: 0,
                isCanonical: true,
              },
            ],
          },
          [
            {
              dayNtlVlm: "500000.00",
              markPx: "45000.50",
              midPx: "45000.50",
              prevDayPx: "44000.00",
              circulatingSupply: "1000.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchSpotData();

      expect(result).toHaveLength(1);
      expect(result[0].pair).toBe("BTC-USDC");
      expect(result[0].image).toBe(
        "https://app.hyperliquid.xyz/coins/BTC_USDC.svg"
      );
    });

    it("should handle zero previous day price correctly", async () => {
      const mockResponse = {
        data: [
          {
            tokens: [
              { name: "USDC", szDecimals: 6 },
              { name: "NEW", szDecimals: 8 },
            ],
            universe: [
              {
                tokens: [1, 0],
                name: "NEW-USDC",
                index: 0,
                isCanonical: true,
              },
            ],
          },
          [
            {
              dayNtlVlm: "50000.00", // Updated to meet volume threshold
              markPx: "100.00",
              midPx: "100.00",
              prevDayPx: "0.00",
              circulatingSupply: "10.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchSpotData();

      expect(result).toHaveLength(1);
      expect(result[0].change24h).toBe(0);
      expect(result[0].change24hAmount).toBe(100);
    });

    it("should handle malformed API responses gracefully", async () => {
      const mockResponse = {
        data: [
          {
            tokens: [
              { name: "USDC", szDecimals: 6 },
              { name: "BTC", szDecimals: 8 },
            ],
            universe: [
              {
                tokens: [1, 0],
                name: "BTC-USDC",
                index: 0,
                isCanonical: true,
              },
            ],
          },
          [
            {
              dayNtlVlm: "50000.00", // Updated to meet volume threshold (was "invalid")
              markPx: "45000.50",
              midPx: "45000.50",
              prevDayPx: "44000.00",
              circulatingSupply: "1000.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchSpotData();

      expect(result).toHaveLength(1);
      expect(result[0].volume24h).toBe(50000.0); // Updated expectation
      expect(result[0].lastPrice).toBe(45000.5);
    });

    it("should handle empty API responses", async () => {
      const mockResponse = {
        data: [
          {
            tokens: [],
            universe: [],
          },
          [],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchSpotData();

      expect(result).toEqual([]);
    });

    it("should handle missing token data", async () => {
      const mockResponse = {
        data: [
          {
            tokens: [
              { name: "USDC", szDecimals: 6 },
              // Missing BTC token
            ],
            universe: [
              {
                tokens: [1, 0], // References non-existent token
                name: "BTC-USDC",
                index: 0,
                isCanonical: true,
              },
            ],
          },
          [
            {
              dayNtlVlm: "500000.00",
              markPx: "45000.50",
              midPx: "45000.50",
              prevDayPx: "44000.00",
              circulatingSupply: "1000.00",
            },
          ],
        ],
      };

      vi.mocked(axios.post).mockResolvedValue(mockResponse);

      const result = await fetchSpotData();

      expect(result).toEqual([]);
    });

    it("should handle API errors gracefully", async () => {
      vi.mocked(axios.post).mockRejectedValue(new Error("API Error"));

      const result = await fetchSpotData();

      expect(result).toEqual([]);
    });

    it("should handle network timeout errors", async () => {
      vi.mocked(axios.post).mockRejectedValue(new Error("timeout"));

      const result = await fetchSpotData();

      expect(result).toEqual([]);
    });
  });

  describe("MarketDataItem type", () => {
    it("should have the correct structure", () => {
      const mockItem: MarketDataItem = {
        pair: "BTC-USD",
        leverage: 10,
        lastPrice: 45000.5,
        change24h: 2.28,
        change24hAmount: 1000.5,
        volume24h: 1000000.0,
        funding8h: 0.0001,
        openInterestMarketCap: 22500250,
        image: "https://app.hyperliquid.xyz/coins/BTC.svg",
      };

      expect(mockItem).toHaveProperty("pair");
      expect(mockItem).toHaveProperty("leverage");
      expect(mockItem).toHaveProperty("lastPrice");
      expect(mockItem).toHaveProperty("change24h");
      expect(mockItem).toHaveProperty("change24hAmount");
      expect(mockItem).toHaveProperty("volume24h");
      expect(mockItem).toHaveProperty("funding8h");
      expect(mockItem).toHaveProperty("openInterestMarketCap");
      expect(mockItem).toHaveProperty("image");
    });
  });
});
