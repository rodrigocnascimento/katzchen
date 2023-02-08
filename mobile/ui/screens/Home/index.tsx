import React, { useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { AuthContext } from "../../context/user/auth.context";
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
      <Title>Home Screen</Title>
      <AWSCognitoFlow />
    </ScreenContainer>
  );
};
