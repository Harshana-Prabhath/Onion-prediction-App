import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

interface YieldDataI {
  year: number;
  yield: number;
}

interface YieldPredictionI {
  model: string;
  predicted_yield: number;
  current_year: number;
  years: YieldDataI[];
}

export const useGetSVMRData = () =>
  useQuery<YieldPredictionI, AxiosError>({
    queryKey: ["svr"],
    queryFn: async () => {
      const response: AxiosResponse<YieldPredictionI> = await axios.get(
        "http://127.0.0.1:8000/predict/demo/svr"
      );
      return response.data;
    },
  });

export const useGetANNData = () =>
  useQuery<YieldPredictionI, AxiosError>({
    queryKey: ["Ann"],
    queryFn: async () => {
      const response: AxiosResponse<YieldPredictionI> = await axios.get(
        "http://127.0.0.1:8000/predict/demo/ann"
      );
      return response.data;
    },
  });
