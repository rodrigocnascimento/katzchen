import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const Title = styled(Text)`
  color: #000;
  text-align: center;
  font-size: 16px;
`;
export default () => (
  <Container>
    <Title>Basic Configuration with Styled Components</Title>
    <StatusBar style="auto" />
  </Container>
);
