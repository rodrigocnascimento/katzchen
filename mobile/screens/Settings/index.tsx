import { Text } from "react-native";
import styled from "styled-components/native";
import { ScreenContainer } from "../screens.styled";
import { useContext } from "react";
import { AuthContext } from "../../context/user/auth.context";

const Title = styled(Text)`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export default () => {
  const user: any = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Title>Setting Screen</Title>
      {user.managedAuthProviderApplicationFlow()}
    </ScreenContainer>
  );
};
