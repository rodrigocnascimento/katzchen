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
import SelectList from "../../components/SelectList";
import CatsRaces from "../../services/cats.race";
import DatePicker from "../../components/DatePicker";
import RadioButton from "../../components/RadioButton";
import ImageInput from "../../components/ImageInput";

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
            render={({ field: { name }, fieldState }) => {
              return (
                <ImageInput
                  fieldState={fieldState}
                  inputName={name}
                  onUpload={(value: string) => setValue(name, value)}
                />
              );
            }}
            name="photo"
          />
          <Controller
            control={control}
            render={({ field: { name }, fieldState }) => {
              return (
                <DatePicker
                  fieldState={fieldState}
                  inputName={name}
                  onValueChange={(value: any) => setValue(name, value)}
                />
              );
            }}
            name="dob"
          />

          <Controller
            control={control}
            render={({ field: { name }, fieldState }) => {
              return (
                <RadioButton
                  id={name}
                  fieldState={fieldState}
                  inputName={name}
                  inputPlaceholder={"Castrado?"}
                  options={[
                    {
                      id: "1", // acts as primary key, should be unique and non-empty string
                      label: "Sim",
                      value: "option1",
                    },
                    {
                      id: "2",
                      label: "Não",
                      value: "option2",
                    },
                  ]}
                  onValueChange={(value: any) => setValue(name, value)}
                />
              );
            }}
            name="castrado"
          />
          <Controller
            control={control}
            render={({ field: { name }, fieldState }) => (
              <Input
                placeholder={"Nome"}
                icon={icon("cat")}
                inputName={name}
                fieldState={fieldState}
                onChangeText={(v) => setValue(name, v)}
              />
            )}
            name="name"
          />

          <Controller
            control={control}
            render={({ field: { value, name }, fieldState }) => (
              <SelectList
                icon={iconCreator(FontAwesome5, "cat", 32)}
                selectedValue={value}
                options={CatsRaces}
                inputName={name}
                fieldState={fieldState}
                onValueChange={(v: any) => setValue(name, v)}
              />
            )}
            name="race"
          />

          <Button onPress={handleSubmit(onSubmit)} title="Submit!" />
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};
