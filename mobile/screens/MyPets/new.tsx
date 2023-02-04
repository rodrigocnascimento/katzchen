import React, { useCallback } from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import Input from "../../components/Input";
import Form from "../../components/Form";

import { ScreenContainer } from "../screens.styled";

import { HeroText, PickerView } from "./styled";

import { iconCreator } from "../../components/helpers/icon.creator";

import { RegisterNewPet } from "./validation";

import CatsRaces from "../../services/cats.race";
import { ScrollView, View } from "react-native";
import SelectPicker from "../../components/Picker";

export default () => {
  const icon = useCallback(
    (name: string) => iconCreator(FontAwesome5, name, 32),
    []
  );

  return (
    <ScrollView>
      <ScreenContainer>
        <HeroText>Vamos registrar os dados do seu miau!</HeroText>
        <Form schemaValidation={RegisterNewPet} submitButtonTitle="Enviar!">
          <Input name={"name"} placeholder={"Nome"} icon={icon("cat")} />
          {
            // TODO improve this approach to create a roudend border on the SelectPicker
          }
          <PickerView>
            {iconCreator(FontAwesome5, "cat", 32).getIcon({
              padding: 10,
            })}
            <SelectPicker
              inputName="race"
              inputPlaceholder="Selecione a raça"
              options={CatsRaces}
              style={{ flex: 1 }}
            />
          </PickerView>
          <Input name={"genre"} placeholder={"Gênero"} icon={icon("paw")} />
          <Input
            name={"bithdate"}
            placeholder={"Data de Nascimento"}
            icon={icon("calendar")}
          />
        </Form>
      </ScreenContainer>
    </ScrollView>
  );
};
