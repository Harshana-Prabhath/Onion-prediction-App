export interface YieldPrediction {
  status: string;
  data: YieldData[];
  summary: Summary;
}

export interface YieldData {
  year: number;
  actual_yield: number | null;
  predicted_yield: number | null;
  type: "historical" | "forecast";
}

export interface Summary {
  total_years: number;
  historical_years: number;
  forecast_years: number;
}
