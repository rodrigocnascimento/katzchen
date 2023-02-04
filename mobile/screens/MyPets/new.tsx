import React, { useCallback } from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import Input from "../../components/Input";

import { ScreenContainer } from "../screens.styled";

import { HeroText, PickerView } from "./styled";

import { iconCreator } from "../../components/helpers/icon.creator";

import { RegisterNewPet } from "./validation";

import CatsRaces from "../../services/cats.race";
import { ScrollView, View } from "react-native";

export default () => {
  const icon = useCallback(
    (name: string) => iconCreator(FontAwesome5, name, 32),
    []
  );

  return (
    <ScrollView>
      <ScreenContainer>
        <HeroText>Vamos registrar os dados do seu miau!</HeroText>
        <View>
          <Input name={"name"} placeholder={"Nome"} icon={icon("cat")} />
          {
            // TODO improve this approach to create a roudend border on the SelectPicker
          }
          <Input name={"genre"} placeholder={"Gênero"} icon={icon("paw")} />
          <Input
            name={"bithdate"}
            placeholder={"Data de Nascimento"}
            icon={icon("calendar")}
          />
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};
