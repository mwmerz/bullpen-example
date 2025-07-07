import { useQuery } from "@tanstack/react-query";
import { fetchPerpsData } from "../lib/marketData";

export function usePerpData() {
  return useQuery({
    queryKey: ["perp-data"],
    queryFn: fetchPerpsData,
    staleTime: 1000 * 60 * 2,
    refetchInterval: 1000 * 60 * 2, // 2 minute polling for now. can tweak.
    refetchOnWindowFocus: true,
  });
}
