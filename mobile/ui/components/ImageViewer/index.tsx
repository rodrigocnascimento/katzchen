import { Image } from "react-native";
import styled from "styled-components/native";

const defaultImagePlaceholder = require("./assets/katzchen.png");

const ImageContainer = styled(Image)`
  width: 140px;
  height: 140px;
  margin-bottom: 15px;
  border-radius: 280px;
`;

export default function ImageViewer({ selectedImage }: Record<string, string>) {
  const imageSource =
    selectedImage !== "" ? { uri: selectedImage } : defaultImagePlaceholder;

  return <ImageContainer source={imageSource} />;
}
