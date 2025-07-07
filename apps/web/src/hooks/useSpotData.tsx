import { useQuery } from "@tanstack/react-query";
import { fetchSpotData } from "../lib/marketData";

export function useSpotData() {
  return useQuery({
    queryKey: ["spot-data"],
    queryFn: fetchSpotData,
    staleTime: 1000 * 60 * 2,
    refetchInterval: 1000 * 60 * 2, // 2 minute polling for now. can tweak.
    refetchOnWindowFocus: true,
  });
}
