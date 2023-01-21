import { Text } from "react-native";
import styled from "styled-components/native";
import { ScreenContainer } from "../styled";

const Title = styled(Text)`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export default () => (
  <ScreenContainer>
    <Title>Home Screen</Title>
  </ScreenContainer>
);
