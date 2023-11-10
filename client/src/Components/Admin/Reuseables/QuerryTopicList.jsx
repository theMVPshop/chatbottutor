/* eslint-disable react/prop-types */
import styled from "styled-components";
import ListItem from "./ListItem";

// eslint-disable-next-line react/prop-types
const QuerryTopicList = ({ searchQuery, data }) => {
  function getTopQuestions(data) {
    const questionCount = {};

    // Count the occurrences of each question
    data.forEach((entry) => {
      const question = entry.question;
      questionCount[question] = (questionCount[question] || 0) + 1;
    });

    // Convert the questionCount object to an array of objects
    const questionArray = Object.keys(questionCount).map((question) => ({
      question: question,
      count: questionCount[question],
    }));

    // Sort the array in descending order based on question count
    questionArray.sort((a, b) => b.count - a.count);

    // Return the top 15 questions
    return questionArray.slice(0, 15);
  }

  const topQuestions = getTopQuestions(data);

  return (
    <Wrapper>
      <Title>
        <h3>Query Topic List</h3>
      </Title>
      <Display>
        <ul>
          {topQuestions.length
            ? topQuestions
                .filter((listItem) => {
                  if (searchQuery === "" || searchQuery === undefined) {
                    return listItem;
                  } else if (
                    listItem.question
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  ) {
                    return listItem;
                  }
                })
                .map((item, index) => (
                  <ListItem key={index} index={index} content={item} />
                ))
            : null}
        </ul>
      </Display>
    </Wrapper>
  );
};

export default QuerryTopicList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
`;
const Title = styled.div`
  height: 100%;
  width: 100%;
  height: fit-content;
  background-color: white;
`;

const Display = styled.div`
  width: 100%;
  height: 100%;
  border: 1px dashed lightgray;
  overflow-y: auto;
  ul {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
