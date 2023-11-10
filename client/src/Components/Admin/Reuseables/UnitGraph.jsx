import styled from "styled-components";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "111",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "211",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "311",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "411",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "511",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
// eslint-disable-next-line react/prop-types
const UnitGraph = () => {
  return (
    <Wrapper>
      <Title>
        <h3>Unit Graph</h3>
      </Title>
      <ResponsiveContainer width="99%" height="99%">
        <BarChart width={150} height={40} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default UnitGraph;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.div`
  height: fit-content;
`;
