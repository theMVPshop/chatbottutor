import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    cohort_1: 4000,
    cohort_2: 2400,
    cohort_3: 2400,
  },
  {
    name: "Feb",
    cohort_1: 3000,
    cohort_2: 1398,
    cohort_3: 2210,
  },
  {
    name: "Mar",
    cohort_1: 2000,
    cohort_2: 9800,
    cohort_3: 2290,
  },
  {
    name: "Apr",
    cohort_1: 2780,
    cohort_2: 3908,
    cohort_3: 2000,
  },
  {
    name: "May",
    cohort_1: 1890,
    cohort_2: 4800,
    cohort_3: 2181,
  },
  {
    name: "Jun",
    cohort_1: 2390,
    cohort_2: 3800,
    cohort_3: 2500,
  },
  {
    name: "Jul",
    cohort_1: 3490,
    cohort_2: 4300,
    cohort_3: 2100,
  },
  {
    name: "Aug",
    cohort_1: 3490,
    cohort_2: 4300,
    cohort_3: 2700,
  },
  {
    name: "Sep",
    cohort_1: 3490,
    cohort_2: 4300,
    cohort_3: 3500,
  },
  {
    name: "Oct",
    cohort_1: 2490,
    cohort_2: 6800,
    cohort_3: 5700,
  },
  {
    name: "Nov",
    cohort_1: 3490,
    cohort_2: 5700,
    cohort_3: 3500,
  },
  {
    name: "Dec",
    cohort_1: 3490,
    cohort_2: 4300,
    cohort_3: 2100,
  },
];

const DataGraph = () => {
  return (
    <Wrapper>
      <Title>
        <h3>Query Graph Analysis</h3>
      </Title>
      <ResponsiveContainer width="99%" height="99%">
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <Tooltip /> */}
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="cohort_1"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="cohort_2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="cohort_3" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default DataGraph;

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

const Tool = styled.div`
  height: 40px;
  width: 60px;
  background-color: #fff;
`;
