import styled from "styled-components";
import ListItem from "./ListItem";

const fakedata = [
  "react",
  "Javascript",
  "MUI",
  "css",
  "sass",
  "node",
  "express",
  "git",
  "npm",
];
// eslint-disable-next-line react/prop-types
const QuerryTopicList = ({ searchQuery }) => {
  return (
    <Wrapper>
      <Title>
        <h3>Query Topic List</h3>
      </Title>
      <Display>
        <ul>
          {fakedata.length
            ? fakedata
                .filter((listItem) => {
                  if (searchQuery === "" || searchQuery === undefined) {
                    return listItem;
                  } else if (
                    listItem.toLowerCase().includes(searchQuery.toLowerCase())
                  ) {
                    return listItem;
                  }
                })
                .map((item, index) => (
                  <ListItem key={item} index={index} content={item} />
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
