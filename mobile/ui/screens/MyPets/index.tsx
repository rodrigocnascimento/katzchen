import { FontAwesome5 } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";

import CreatePet from "./create";
import ListPets from "./list";
import { Header, HeaderTitle, HeaderButtons } from "./styled";
import ButtonIcon from "../../components/ButtonIcon";
import { iconCreator } from "../../components/helpers/icon.creator";

import di from "~/ui/di";

type BackgroundImageProps =
  | {
      name: string;
      image: ImageSourcePropType;
      style: StyleProp<ImageStyle>;
    }
  | undefined;

class BackgroundImageRotator {
  private static defaultImage = [
    {
      name: "purr.png",
      image: require("../../assets/purr.png"),
      style: {
        zIndex: 9,
        height: 180,
        top: 100,
        left: 220,
      },
    },
    {
      name: "purr-traveler-cat.png",
      image: require("../../assets/purr-traveler-cat.png"),
      style: {
        zIndex: 9,
        height: 130,
        top: 135,
        left: 160,
      },
    },
  ];

  public static getBackgroundImage(imageURI?: string): BackgroundImageProps {
    return (
      BackgroundImageRotator.defaultImage.find(
        ({ name }) => name === imageURI
      ) || BackgroundImageRotator.defaultImage[0]
    );
  }
}

export default () => {
  const [screen, setScreen] = useState("");
  const [imageSource, setImageSource] = useState<BackgroundImageProps>(
    useCallback(() => BackgroundImageRotator.getBackgroundImage(), [])
  );

  function handleScreenSetter(screen: string, imageBackground: string) {
    setScreen(screen);

    setImageSource(BackgroundImageRotator.getBackgroundImage(imageBackground));
  }

  return (
    <ImageBackground
      source={imageSource?.image}
      style={{ flex: 1 }}
      resizeMode="contain"
      imageStyle={imageSource?.style}
    >
      <Header>
        <HeaderTitle>Meus Katz</HeaderTitle>
        <HeaderButtons
          horizontal
          scrollEnabled
          style={{ flexGrow: 1 }}
          contentContainerStyle={{
            alignItems: "center",
            height: "100%",
          }}
        >
          <ButtonIcon
            icon={iconCreator(FontAwesome5, "home", 24, "#fff")}
            onPress={() => handleScreenSetter("", "purr.png")}
            rounded
          />
          <ButtonIcon
            icon={iconCreator(FontAwesome5, "plus-circle", 24, "#fff")}
            title="Cadastrar"
            onPress={() =>
              handleScreenSetter("create", "purr-traveler-cat.png")
            }
          />
        </HeaderButtons>
      </Header>
      {screen === "" && <ListPets pet={di.pet} />}
      {screen === "create" && <CreatePet pet={di.pet} />}
    </ImageBackground>
  );
};
