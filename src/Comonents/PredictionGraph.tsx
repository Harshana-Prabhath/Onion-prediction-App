import React, { useEffect } from "react";
import { isRouteErrorResponse, useNavigate } from "react-router";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";
import { Button, Dropdown, MenuProps, Space, Spin } from "antd";
import { useGetPredictedData } from "../Hooks/modelHooks";
import { YieldPrediction } from "../assets/Interfaces/prediction.interfaces";

const WrapperContainer = styled.div`
  width: 100%;
`;

const ChartContainer = styled.div`
  margin-top: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 100px;
`;
const ChartTitleContainer = styled.div`
  width: 83%;
`;
const ChartTitle = styled.h4`
  font-size: 25px;
  font-weight: 600;
  color: #111827;
  text-align: left;
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  padding-top: 30px;
`;
const MainTitle = styled.h1``;
const SubTitle = styled.h2``;

const PredictionGraph: React.FC = () => {
  const YeildData: YieldPrediction = {
    status: "success",
    data: [
      {
        year: 2004,
        actual_yield: 12.76,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2005,
        actual_yield: 14.28,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2006,
        actual_yield: 11.4,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2007,
        actual_yield: 13.65,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2008,
        actual_yield: 17.66,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2009,
        actual_yield: 18.25,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2010,
        actual_yield: 14.26,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2011,
        actual_yield: 21,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2012,
        actual_yield: 15,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2013,
        actual_yield: 19,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2014,
        actual_yield: 19,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2015,
        actual_yield: 20,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2016,
        actual_yield: 19,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2017,
        actual_yield: 20,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2018,
        actual_yield: 20,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2019,
        actual_yield: 28,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2020,
        actual_yield: 17,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2021,
        actual_yield: 16.4,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2022,
        actual_yield: 8.4,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2023,
        actual_yield: 15.7,
        predicted_yield: null,
        type: "historical",
      },
      {
        year: 2024,
        actual_yield: null,
        predicted_yield: 17.618458504846277,
        type: "forecast",
      },
      {
        year: 2025,
        actual_yield: null,
        predicted_yield: 16.88384228079106,
        type: "forecast",
      },
    ],
    summary: {
      total_years: 22,
      historical_years: 20,
      forecast_years: 2,
    },
  };

  const { data: YeildResponse, isLoading, isError } = useGetPredictedData();

  const data = YeildResponse?.data;

  console.log(data);

  return (
    <>
      <WrapperContainer>
        <HeadingContainer>
          <MainTitle>Onion Yeild Prediction</MainTitle>
          <SubTitle>
            {" "}
            {YeildData.data && YeildData.data.length > 0
              ? `Visualization of actual and predicted yields from ${YeildData.data[0].year} to ${YeildData.data[YeildData.data.length - 1].year}`
              : "Loading yield data..."}
          </SubTitle>
        </HeadingContainer>

        <Spin spinning={isLoading}>
          <ChartContainer>
            <ChartTitleContainer>
              <ChartTitle>Yeild Comparison Over Years</ChartTitle>
            </ChartTitleContainer>
            <ResponsiveContainer width="90%" height={600}>
              <LineChart
                title={"Onion Prediction"}
                data={YeildData.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                accessibilityLayer
              >
                <CartesianGrid />
                <XAxis
                  dataKey="year"
                  label={{
                    value: "year",
                    position: "insideBottomRight",
                    offset: -10,
                  }}
                  allowDecimals
                />
                <YAxis
                  label={{
                    value: "Yield (tons/hectare)",
                    position: "insideLeft",
                    angle: -90,
                    offset: 10,
                  }}
                  allowDecimals
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="actual_yield"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  connectNulls={true}
                />
                <Line
                  type="monotone"
                  dataKey="predicted_yield"
                  stroke="#82ca9d"
                  activeDot={{ r: 12 }}
                  connectNulls={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Spin>
      </WrapperContainer>
    </>
  );
};

export default PredictionGraph;
