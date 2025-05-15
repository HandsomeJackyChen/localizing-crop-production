export type YieldTrend = 'increasing' | 'decreasing' | 'stable';

interface Crop {
  relative_yield_score: number;
  yield_trend: YieldTrend;
  varieties: {
    name: string;
    score: number;
  }[];
  inputs?: { input: string; relativeAmount: number }[];
  top_crops?: { id: string; name: string; score: number; trend: YieldTrend }[];
}
export interface RegionProperties {
  region_id: string;
  region_name: string;
  year: number;
  crops: {
    [crop: string]: Crop;
  };
}
