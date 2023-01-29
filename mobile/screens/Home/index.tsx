import { Text } from "react-native";
import styled from "styled-components/native";
import { ScreenContainer } from "../screens.styled";
import React, { useContext } from "react";
import { AuthContext } from "../../context/user/auth.context";
import AWSCognitoFlow from "../../services/AWSCognitoFlow";

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
