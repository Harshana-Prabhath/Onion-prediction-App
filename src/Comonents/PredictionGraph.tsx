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

interface YieldDataI {
  year: number;
  actualYield?: number;
  predictedYield?: number;
}
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
  const YeildData: YieldDataI[] = [
    { year: 2018, actualYield: 8.5 },
    { year: 2019, actualYield: 9.1 },
    { year: 2020, actualYield: 8.8 },
    { year: 2021, actualYield: 9.4 },
    { year: 2022, actualYield: 10.0 },
    { year: 2023, actualYield: 9.7 },
    { year: 2024, predictedYield: 10.5 },
    { year: 2025, predictedYield: 11.0 },
  ];

  return (
    <>
      <WrapperContainer>
        <HeadingContainer>
          <MainTitle>Onion Yeild Prediction</MainTitle>
          <SubTitle>
            {" "}
            {YeildData && YeildData.length > 0
              ? `Visualization of actual and predicted yields from ${YeildData[0].year} to ${YeildData[YeildData.length - 1].year}`
              : "Loading yield data..."}
          </SubTitle>
        </HeadingContainer>

        <Spin spinning={false}>
          <ChartContainer>
            <ChartTitleContainer>
              <ChartTitle>Yeild Comparison Over Years</ChartTitle>
            </ChartTitleContainer>
            <ResponsiveContainer width="90%" height={600}>
              <LineChart
                title={"Onion Prediction"}
                data={YeildData}
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
                    value: "Year",
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
                  dataKey="actualYield"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  connectNulls={true}
                />
                <Line
                  type="monotone"
                  dataKey="predictedYield"
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
