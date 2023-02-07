import { Image } from "react-native";
import styled from "styled-components";

const ImageImage = styled(Image)`
  width: 140px;
  height: 140px;
  margin-bottom: 15px;
  border-radius: 280px;
`;

const defaultImagePlaceholder = require("./assets/katzchen.png");

export default function ImageViewer({ selectedImage }: Record<string, string>) {
  const imageSource =
    selectedImage !== "" ? { uri: selectedImage } : defaultImagePlaceholder;

  return <ImageImage source={imageSource} />;
}
