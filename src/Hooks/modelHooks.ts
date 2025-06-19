import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { YieldPrediction } from "../assets/Interfaces/prediction.interfaces";

interface YieldDataI {
  year: number;
  actual_yield: number;
  predicted_yield: number;
  type: string;
}

interface SummaryofYeildData {
  status: string;
  data: YieldDataI[];
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

export const useGetPredictedData = () =>
  useQuery<YieldPrediction, AxiosError>({
    queryKey: ["predicted data"],
    queryFn: async () => {
      const response: AxiosResponse<YieldPrediction> = await axios.get(
        "http://13.48.158.110/predict-yields"
      );
      return response.data;
    },
  });
