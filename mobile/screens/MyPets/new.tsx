import React, { useCallback } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import Input from "../../components/Input";

import { ScreenContainer } from "../screens.styled";

import { HeroText } from "./styled";

import { iconCreator } from "../../components/helpers/icon.creator";

import { registerNewPetSchema } from "./validation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, ScrollView, View } from "react-native";

export default () => {
  const icon = useCallback(
    (name: string) => iconCreator(FontAwesome5, name, 32),
    []
  );

  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(registerNewPetSchema),
  });

  const onSubmit = (formData: any) => {
    console.log("onSubmit", { formData });
  };

  return (
    <ScrollView>
      <ScreenContainer>
        <HeroText>Vamos registrar os dados do seu miau!</HeroText>
        <View>
          <Controller
            control={control}
            render={({ field: { value, name }, fieldState }) => (
              <Input
                name={name}
                placeholder={"Nome"}
                icon={icon("cat")}
                fieldState={fieldState}
                value={value}
                onChangeText={(v) => setValue(name, v)}
              />
            )}
            name="name"
          />

          <Button onPress={handleSubmit(onSubmit)} title="Submit!" />
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};
