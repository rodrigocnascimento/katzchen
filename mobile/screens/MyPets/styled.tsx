import { ScrollView, Text, View } from "react-native";

import styled from "styled-components/native";

export const HeroText = styled(Text)`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const Header = styled(View)`
  background-color: #abdbed;
  height: 250px;
  padding-top: 35px;
  padding-left: 10px;
`;

export const HeaderFont = styled(Text)`
  color: #2f93b8;
`;

export const HeaderTitle = styled(HeaderFont)`
  margin-top: 20px;
  text-align: center;
  font-size: 46px;
`;

export const HeaderText = styled(HeaderFont)`
  font-size: 18px;
`;

export const HeaderButtons = styled(ScrollView)``;

export const ScreenContainer = styled(View)`
  flex: 1;
  background-color: #fff;
`;

export const PickerView = styled(View)`
  border-radius: 5px;
  border-color: #bdc3c7;
  background-color: #ddf6ff;
  margin-left: 3px;
  margin-right: 3px;
  border-width: 0px;
  overflow: hidden;
  padding: 0px;
  flex-direction: row;
`;
