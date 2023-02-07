import { FontAwesome5 } from "@expo/vector-icons";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import styled from "styled-components/native";
import ButtonIcon from "../ButtonIcon";
import { iconCreator } from "../helpers/icon.creator";
import { useState } from "react";
import { InputErrorLabel } from "../Input/styled";

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

const ImageImage = styled(Image)`
  width: 140px;
  height: 140px;
  margin-bottom: 15px;
  border-radius: 280px;
`;

const defaultImagePlaceholder = require("./assets/katzchen.png");

function ImageViewer({ selectedImage }: Record<string, string>) {
  const imageSource =
    selectedImage !== "" ? { uri: selectedImage } : defaultImagePlaceholder;

  return <ImageImage source={imageSource} />;
}

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
    let result = await ImagePicker.launchImageLibraryAsync({
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
