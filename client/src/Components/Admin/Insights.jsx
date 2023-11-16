import { useEffect, useState } from "react";
import styled from "styled-components";
import { TagCloud } from 'react-tagcloud';
import TagWithTooltip from "./TagWithTooltip";

// eslint-disable-next-line react/prop-types
const Insights = () => {

  const [tags, setTags] = useState([]);
  const [hoveredTag, setHoveredTag] = useState(null);

  useEffect(() => {

    // get rid of this function when we have real data
    const randomlyDuplicateItems = (items) => {
      const result = [];

      items.forEach(item => {
        const duplicateTimes = Math.floor(Math.random() * 50);
        for (let i = 0; i <= duplicateTimes; i++) {
          result.push(item);
        }
      });

      return result;
    };

    const convertToValueCountArray = (tags) => {
      const result = [];

      tags.forEach(tag => {
        tag = tag.toLowerCase();
        const existingTag = result.find(item => item.value === tag);

        if (existingTag) {
          existingTag.count++;
        } else {
          result.push({ value: tag, count: 1 });
        }
      });

      return result;
    };

    // Example usage
    const testTags = randomlyDuplicateItems([
      "JavaScript",
      "React",
      "Node",
      "express",
      "database",
      "sql",
      "html",
      "css",
      "array",
      "bootstrap",
      "server",
      "components",
      "ui"
    ]);

    // testTags should be substituted with real data
    const data = convertToValueCountArray(testTags);
    setTags(data);

  }, []);

  const customRenderer = (tag, fontSize, color) => {
    const isHovered = hoveredTag === tag.value;

    return <TagWithTooltip tag={tag} fontSize={fontSize} color={color} />
  };

  return (
    <Wrapper>
      <ul>
        <li>summary of session with starred solution + lesson + cohort?</li>
        <li>summary of reoccuring questions within lessons?</li>
        <TagsContainer>
          <h3>Commonly Searched Words</h3>
          <StyledTags
            minSize={16}
            maxSize={48}
            tags={tags}
            colorOptions={{
              luminosity: 'light',
              hue: 'blue'
            }}
            renderer={customRenderer}
          />
        </TagsContainer>
      </ul>
      <IframeTestWrap>
        <iframe
          src="http://localhost:5173"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </IframeTestWrap>
    </Wrapper>
  );
};

export default Insights;

const TagsContainer = styled.div`
  text-align: center;
  max-width: 25rem;
  margin: 1rem;
`;

const StyledTags = styled(TagCloud)`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.5rem;
  background: #333338;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 100%;
  padding: 20px;
  gap: 20px;
  @media only screen and (min-width: 1614px) {
    height: calc(100vh - 100px);
  }
`;

const IframeTestWrap = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 500px;
  width: 350px;
  border: 1px solid lightgray;
`;
