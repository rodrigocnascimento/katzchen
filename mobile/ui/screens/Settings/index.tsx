import { Text } from "react-native";
import styled from "styled-components/native";

import AWSCognitoFlow from "../../services/AWSCognitoFlow";
import { ScreenContainer } from "../screens.styled";

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
