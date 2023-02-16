import React, { useCallback } from "react";
import { Text, View, ScrollView } from "react-native";
import styled from "styled-components";

import { ScreenContainer } from "../screens.styled";

import { Pet } from "~/application/domain/entities/Pet";
import ErrorMessage from "~/ui/components/Error";
import ImageViewer from "~/ui/components/ImageViewer";
import Loader from "~/ui/components/Loader";
import { IPresenters } from "~/ui/di/presenters";
import { useDataLoader } from "~/ui/hooks/data";

export const Card = styled(View)`
  flex-direction: row;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #ddf6ff;
`;
export const CardTitle = styled(Text)`
  font-size: 26px;
  font-weight: bold;
  color: #475053;
  padding: 4px 0px 3px 14px;
`;
export const CardTSubitle = styled(Text)`
  font-size: 18px;
  color: #aaa;
  padding: 0px 0px 14px 14px;
`;

const PetCard = ({ data }: any) => {
  return (
    <Card>
      <View>
        <ImageViewer selectedImage={data.photo} />
      </View>

      <View style={{ flex: 1 }}>
        <CardTitle>{data.name}</CardTitle>
        <CardTSubitle>{data.gender}</CardTSubitle>
      </View>
    </Card>
  );
};

export default ({ pet }: IPresenters) => {
  const loadPets = useCallback(async () => pet.getAllPets(), []);

  const {
    error: { hasError, message, name },
    isLoading,
    response,
  } = useDataLoader<Pet[]>(loadPets);

  return (
    <ScrollView>
      <ScreenContainer>
        <ErrorMessage error={{ hasError, message, name }} />
        {isLoading && <Loader message="Estamos carregando seu gato..." />}
        {response?.map((pet: Pet) => (
          <PetCard key={`key-${pet.id}`} data={pet} />
        ))}
      </ScreenContainer>
    </ScrollView>
  );
};
