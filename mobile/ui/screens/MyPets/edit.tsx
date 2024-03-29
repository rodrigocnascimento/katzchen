import { FontAwesome5 } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, ScrollView, View } from "react-native";

import { HeroText } from "./styled";
import { registerNewPetSchema } from "./validation";
import { ScreenContainer } from "../screens.styled";

import DatePicker from "~/components/DatePicker";
import ImageInput from "~/components/ImageInput";
import Input from "~/components/Input";
import RadioButton from "~/components/RadioButton";
import SelectList from "~/components/SelectList";
import { iconCreator } from "~/components/helpers/icon.creator";
// import { CreatePetUseCase } from "~/modules/petz/domain/usecases/createpet.usecase";
import CatsRaces from "~/ui/services/cats.race";

type EditPetScreen = {
  useCaseImpl: any;
  defaultValues: any;
};

export default ({ useCaseImpl, defaultValues }: EditPetScreen) => {
  const icon = useCallback(
    (name: string) => iconCreator(FontAwesome5, name, 32),
    []
  );

  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(registerNewPetSchema),
    defaultValues,
  });

  const onSubmit = async (formData: any) => {
    const createPet = await useCaseImpl.CreatePet(formData);
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
                  inputPlaceholder="Castrado?"
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
                placeholder="Nome"
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
