import styled, { keyframes } from "styled-components";
import Multithreading from "./Multithreading";
import JavaDev from "./JavaDev";
import WebDev from "./WebDev";
import DataStructures from "./DataStructures";
import { useState } from "react";

// ✅ Define animation outside the styled component
const moveText = keyframes`
  to {
    width: 100%;
  }
`;

const data = [
  "Java Development",
  "Web Development",
  "Data Structures",
  "Algorithms",
  "Multithreading",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: 500;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #61111e;
  position: relative;

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: #9b2e40;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover::after {
    animation: ${moveText} 0.5s linear forwards;
  }
`;
const Right = styled.div`
  flex: 1;
`;

function Works() {
  const [work, setWork] = useState("Java Development");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item}
                data-text={item}
                onClick={() => setWork(item)}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Java Development" ? (
            <JavaDev />
          ) : work === "Web Development" ? (
            <WebDev />
          ) : work === "Data Structures" ? (
            <DataStructures />
          ) : (
            <Multithreading />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
