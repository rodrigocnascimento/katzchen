import React, { useCallback, useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styled from "styled-components";

import { ScreenContainer } from "../screens.styled";

import { Pet } from "~/modules/petz/domain/pet.entity";
import { GetAllPetsUseCase } from "~/modules/petz/domain/usecases/getall.usecase";
import ImageViewer from "~/ui/components/ImageViewer";

type ListPetScreen = {
  useCaseImpl: GetAllPetsUseCase;
};

export const Card = styled(View)`
  flex-direction: row;
  border: 1px solid orange;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 3px;
  background-color: #ddf6ff;
`;
export const CardTitle = styled(Text)`
  flex: 1;
  font-size: 18px;
`;

const PetCard = ({ data }: any) => {
  return (
    <Card>
      <ImageViewer selectedImage={data.photo} />
      <CardTitle>{data.name}</CardTitle>
      <CardTitle>{data.gender}</CardTitle>
    </Card>
  );
};

export default ({ useCaseImpl }: ListPetScreen) => {
  const [petsList, setPetsList] = useState<Pet[]>();

  const loadPets = useCallback(async () => {
    const pets = await useCaseImpl.GetAllPets();

    setPetsList(pets);
  }, []);

  useEffect(() => {
    loadPets().catch(console.error);
  }, []);

  return (
    <ScrollView>
      <ScreenContainer>
        {petsList?.map((pet) => {
          return <PetCard key={`key-${pet.id}`} data={pet} />;
        })}
        {!!petsList && (
          <>
            <Text>Não tem Pets :(</Text>
          </>
        )}
      </ScreenContainer>
    </ScrollView>
  );
};
