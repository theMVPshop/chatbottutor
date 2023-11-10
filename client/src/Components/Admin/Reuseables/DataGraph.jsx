/* eslint-disable react/prop-types */
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

const DataGraph = ({ data }) => {
  // Function to map months and the number of questions for each cohort
  function mapMonthsToCohortsQuestions(data) {
    const monthOrder = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthCohortsQuestionMap = new Map();

    data.forEach((entry) => {
      const date = new Date(entry.date);
      const month = date.toLocaleString("en-US", { month: "short" });
      const cohortKey = `cohort_${entry.cohort}`;

      if (!monthCohortsQuestionMap.has(month)) {
        // Initialize the count for a new month
        monthCohortsQuestionMap.set(month, { name: month });
      }

      // Increment the count for the cohort in the existing month
      monthCohortsQuestionMap.get(month)[cohortKey] =
        (monthCohortsQuestionMap.get(month)[cohortKey] || 0) + 1;
    });

    // Convert the Map to an array of objects
    const resultArray = Array.from(monthCohortsQuestionMap.values());

    // Sort the array based on the custom order of months
    resultArray.sort(
      (a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name)
    );

    return resultArray;
  }

  // Call the function and log the result
  const resultArray = mapMonthsToCohortsQuestions(data);

  return (
    <Wrapper>
      <Title>
        <h3>Query Graph Analysis</h3>
      </Title>
      <ResponsiveContainer width="99%" height="99%">
        <LineChart
          width={500}
          height={400}
          data={resultArray}
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
