/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UnitGraph = ({ data }) => {
  // Function to determine the number of questions per unit
  function questionsPerUnit(data) {
    const unitQuestionCountMap = new Map();

    data.forEach((entry) => {
      const unit = entry.unit;

      if (unitQuestionCountMap.has(unit)) {
        // Increment the count for an existing unit
        unitQuestionCountMap.set(unit, unitQuestionCountMap.get(unit) + 1);
      } else {
        // Initialize the count for a new unit
        unitQuestionCountMap.set(unit, 1);
      }
    });

    // Convert the Map to an array of objects
    const resultArray = Array.from(
      unitQuestionCountMap,
      ([unit, questionCount]) => {
        return { name: unit, count: questionCount };
      }
    );

    return resultArray;
  }

  // Call the function and log the result
  const result = questionsPerUnit(data);

  return (
    <Wrapper>
      <Title>
        <h3>Unit Query Graph</h3>
      </Title>
      <ResponsiveContainer width="99%" height="99%">
        <BarChart width={150} height={40} data={result}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#d58787" />
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
