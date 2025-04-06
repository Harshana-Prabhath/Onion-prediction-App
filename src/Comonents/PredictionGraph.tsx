import React from "react";
import { useNavigate } from "react-router";
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
import { theme } from "../styles/theme";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

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

const StyledSpace = styled(Space)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const StyledDropdown = styled(Dropdown)`
  width: 200px;
  justify-content: center;
  text-align: center;
`;

const data = [
  { year: 2000, actual: 11.4, predicted: 12.14 },
  { year: 2001, actual: 12.76, predicted: 12.25 },
  { year: 2002, actual: 21.0, predicted: 17.73 },
  { year: 2003, actual: 19.0, predicted: 17.5 },
  { year: 2004, actual: 15.0, predicted: 17.78 },
  { year: 2005, actual: 20.0, predicted: 17.91 },
  { year: 2006, actual: 15.7, predicted: 18.02 },
  { year: 2007, actual: 21.0, predicted: 17.76 },
  { year: 2008, actual: 12.76, predicted: 12.82 },
  { year: 2009, actual: 20.0, predicted: 17.88 },
  { year: 2010, actual: 13.65, predicted: 17.7 },
  { year: 2011, actual: 16.4, predicted: 18.02 },
  { year: 2012, actual: 19.0, predicted: 17.56 },
  { year: 2013, actual: 19.0, predicted: 17.72 },
  { year: 2014, actual: 19.0, predicted: 17.57 },
  { year: 2015, actual: 15.7, predicted: 18.02 },
  { year: 2016, actual: 28.0, predicted: 18.01 },
  { year: 2017, actual: 14.28, predicted: 13.98 },
  { year: 2018, actual: 19.0, predicted: 17.95 },
  { year: 2019, actual: 19.0, predicted: 17.82 },
  { year: 2020, actual: 19.0, predicted: 17.67 },
  { year: 2021, actual: 14.28, predicted: 12.99 },
  { year: 2022, actual: 15.7, predicted: 18.04 },
  { year: 2023, actual: 11.4, predicted: 12.42 },
  { year: 2024, actual: 20.0, predicted: 17.94 },
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "ANN",
  },
  { key: "2", label: "SVMR" },
];

const PredictionGraph: React.FC = () => {
  let navigate = useNavigate();

  return (
    <>
      <WrapperContainer>
        <HeadingContainer>
          <MainTitle>Onion Yeild Prediction</MainTitle>
          <SubTitle>{`Visualization of acutal and predicted yeilds from ${data[0].year} to ${data[data.length - 1].year}`}</SubTitle>
        </HeadingContainer>
        <StyledSpace>
          <StyledDropdown
            overlayClassName="custom-dropdown"
            menu={{ items }}
            placement="bottom"
            arrow
          >
            <Button>Select Model</Button>
          </StyledDropdown>
        </StyledSpace>
        <ChartContainer>
          <ChartTitleContainer>
            <ChartTitle>Yeild Comparison Over Years</ChartTitle>
          </ChartTitleContainer>
          <ResponsiveContainer width="90%" height={600}>
            <LineChart
              title={"Onion Prediction"}
              data={data}
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
                dataKey="actual"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </WrapperContainer>
    </>
  );
};

export default PredictionGraph;
