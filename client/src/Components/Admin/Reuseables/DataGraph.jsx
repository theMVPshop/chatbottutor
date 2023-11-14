/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const DataGraph = ({ data }) => {
  function getQuestionsPerMonth(data) {
    const questionsPerMonth = {};
    const months = [
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

    // Helper function to get abbreviated month name
    function getAbbreviatedMonthName(date) {
      const monthIndex = new Date(date).getMonth();
      return months[monthIndex];
    }

    // Iterate through the dataset
    data.forEach((entry) => {
      const month = getAbbreviatedMonthName(entry.date);

      // If the month key doesn't exist, create an empty object for it
      if (!questionsPerMonth[month]) {
        questionsPerMonth[month] = {};
      }

      const cohort = `cohort_${entry.cohort}`;

      // If the cohort key doesn't exist for the month, create it and initialize the count to 1
      if (!questionsPerMonth[month][cohort]) {
        questionsPerMonth[month][cohort] = 1;
      } else {
        // If the cohort key already exists for the month, increment the count
        questionsPerMonth[month][cohort]++;
      }
    });

    // Extract all unique cohorts across all months
    const allCohorts = [
      ...new Set(data.map((entry) => `cohort_${entry.cohort}`)),
    ];

    // Convert the questionsPerMonth object to an array of objects with the specified format
    const resultArray = months.map((month) => {
      const monthObject = { name: month };

      // Populate the cohort counts for the month, including cohorts with 0 questions
      allCohorts.forEach((cohort) => {
        monthObject[cohort] = questionsPerMonth[month][cohort] || 0;
      });

      return monthObject;
    });

    return resultArray;
  }

  const questionsPerMonthArray = getQuestionsPerMonth(data);
  console.log(questionsPerMonthArray);

  return (
    <Wrapper>
      <Title>
        <h3>Cohort Query Analysis</h3>
      </Title>
      <ResponsiveContainer width="99%" height="99%">
        <AreaChart
          width={730}
          height={250}
          data={questionsPerMonthArray}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFC962" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFC962" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="cohort_1"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#color1)"
          />
          <Area
            type="monotone"
            dataKey="cohort_2"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#color2)"
          />
          <Area
            type="monotone"
            dataKey="cohort_3"
            stroke="#FFC962"
            fillOpacity={1}
            fill="url(#color3)"
          />
        </AreaChart>
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
