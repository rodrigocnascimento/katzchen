import { Text } from "react-native";
import styled from "styled-components/native";
import { ScreenContainer } from "../screens.styled";
import AWSCognitoFlow from "../../services/AWSCognitoFlow";

const Title = styled(Text)`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export default () => {
  return (
    <ScreenContainer>
      <Title>Setting Screen</Title>
      <AWSCognitoFlow />
    </ScreenContainer>
  );
};
