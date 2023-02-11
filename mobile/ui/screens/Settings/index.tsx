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
      <Text>
        A special thanks to Icons 8{" "}
        {/* <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
          Illustration by Icons 8
        </a>{" "}
        from <a href="https://icons8.com/illustrations">Ouch!</a> */}
      </Text>
      <AWSCognitoFlow />
    </ScreenContainer>
  );
};
