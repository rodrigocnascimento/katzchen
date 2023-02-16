import { FontAwesome5 } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, ScrollView, View, Text } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { HeroText } from "./styled";
import { registerNewPetSchema } from "./validation";
import { ScreenContainer } from "../screens.styled";

import { RacePetListDTO } from "~/application/domain/dto/PetDTO";
import { Pet } from "~/application/domain/entities/Pet";
import DatePicker from "~/components/DatePicker";
import ImageInput from "~/components/ImageInput";
import Input from "~/components/Input";
import RadioButton from "~/components/RadioButton";
import SelectList from "~/components/SelectList";
import { iconCreator } from "~/components/helpers/icon.creator";
import ErrorMessage from "~/ui/components/Error";
import CatLoader from "~/ui/components/Loader";
import { IPresenters } from "~/ui/di/presenters";
import { useDataLoader, useDataSubmit } from "~/ui/hooks/data";

export default ({ pet }: IPresenters) => {
  const loadCatsRace = useCallback(async () => pet.getAllPetRacesByGenre(), []);

  const { response: catRaceList = [] } =
    useDataLoader<RacePetListDTO[]>(loadCatsRace);

  const {
    error: { hasError: hasErrorOnCreation, message: onCreationErrorMessage },
    isSubmittingData,
    response,
    onSubmit,
  } = useDataSubmit<Pet>();

  useEffect(() => {
    if (response) {
      Toast.show({
        type: "success",
        text1: "Eba :3",
        text2: `Você acabou de cadastrar ${response.name} :3`,
      });
    }
  }, [response]);

  // TODO resolver esse any :'(
  const handleCreationForm = async (formData: any) =>
    onSubmit(async () => pet.createPet(formData));

  const icon = useCallback(
    (name: string) => iconCreator(FontAwesome5, name, 32),
    []
  );

  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(registerNewPetSchema),
  });

  return (
    <ScrollView>
      <ScreenContainer>
        <ErrorMessage
          error={{
            hasError: hasErrorOnCreation,
            message: onCreationErrorMessage,
          }}
        />
        {isSubmittingData && (
          <CatLoader message="Estamos enviando seu gato..." />
        )}
        <View style={[isSubmittingData && { display: "none" }]}>
          <HeroText>Vamos registrar os dados do seu miau!</HeroText>
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
                inputPlaceholder="Selecione uma opção :3"
                options={catRaceList}
                inputName={name}
                fieldState={fieldState}
                onValueChange={(v: any) => setValue(name, v)}
              />
            )}
            name="race"
          />

          <Button onPress={handleSubmit(handleCreationForm)} title="Submit!" />
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};
