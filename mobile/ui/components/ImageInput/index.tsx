import { FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import ButtonIcon from "../ButtonIcon";
import ImageViewer from "../ImageViewer";
import { InputErrorLabel } from "../Input/styled";
import { iconCreator } from "../helpers/icon.creator";

const ImageContainer = styled(View)`
  flex: 1;
  align-items: center;
  margin: 3px;
  margin-bottom: 13px;
`;

const FooterContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

type ImageInputProps = {
  fieldState: any;
  inputName?: string;
  inputPlaceholder?: string;
  onUpload: (uri: string) => void;
};

export default function ImageInput({
  fieldState,
  inputName,
  inputPlaceholder,
  onUpload,
}: ImageInputProps) {
  const [selectedImage, setSelectedImage] = useState("");

  const { invalid, error } = fieldState;

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onUpload(result.assets[0].uri);
    }
  };

  return (
    <ImageContainer>
      <View>
        <ImageViewer selectedImage={selectedImage} />
      </View>
      <FooterContainer>
        <ButtonIcon
          title="CHOOSE A PHOTO"
          fontSize="12px"
          color="#fff"
          icon={iconCreator(FontAwesome5, "photo-video", 16, "#fff")}
          onPress={pickImageAsync}
        />
      </FooterContainer>
      {invalid && <InputErrorLabel>{error.message}</InputErrorLabel>}
    </ImageContainer>
  );
}
