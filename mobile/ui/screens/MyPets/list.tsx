import React, { useCallback, useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styled from "styled-components";

import { ScreenContainer } from "../screens.styled";

import ImageViewer from "~/ui/components/ImageViewer";
import { IPresenters } from "~/ui/di/presenters";

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

const wait = async (ms: number) => new Promise((res) => setTimeout(res, ms));

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
  const [petsList, setPetsList] = useState<any[]>();

  const loadPets = useCallback(async () => {
    await wait(3000);
    const pets = await pet.getAllPets();

    setPetsList(pets);
  }, []);

  useEffect(() => {
    loadPets().catch(console.error);
  }, []);

  return (
    <ScrollView>
      <ScreenContainer>
        {!petsList && (
          <>
            <Text>Não tem Pets :(</Text>
          </>
        )}
        {petsList?.map((pet) => {
          return <PetCard key={`key-${pet.id}`} data={pet} />;
        })}
      </ScreenContainer>
    </ScrollView>
  );
};
