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
import { useGetANNData, useGetSVMRData } from "../Hooks/modelHooks";
import { ModelTypes } from "../enum/modeltypes";

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
const StyledDropdown = styled(Dropdown.Button)`
  width: 200px;
  justify-content: center;
  text-align: center;
`;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "ANN",
  },
  { key: "2", label: "SVMR" },
];

const PredictionGraph: React.FC = () => {
  const [selectedModel, setSelectedModel] = React.useState<ModelTypes>(
    ModelTypes.ANN
  );

  let navigate = useNavigate();

  const {
    data: svrData,
    isLoading: svmrLoading,
    refetch: svmrRefetch,
  } = useGetSVMRData();

  const {
    data: annData,
    isLoading: annLoading,
    refetch: annRefetch,
  } = useGetANNData();

  const YeildData =
    selectedModel === ModelTypes.ANN
      ? (annData?.years ?? [])
      : (svrData?.years ?? []);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "1") {
      setSelectedModel(ModelTypes.ANN);
      annRefetch();
    } else if (e.key === "2") {
      setSelectedModel(ModelTypes.SVMR);
      svmrRefetch();
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

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
        <StyledSpace>
          <StyledDropdown
            overlayClassName="custom-dropdown"
            menu={menuProps}
            placement="bottom"
            arrow
          >
            Select Model
          </StyledDropdown>
        </StyledSpace>
        <Spin spinning={svmrLoading || annLoading}>
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
                  dataKey="actual_yield"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="predicted_yield"
                  stroke="#82ca9d"
                  activeDot={{ r: 12 }}
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
