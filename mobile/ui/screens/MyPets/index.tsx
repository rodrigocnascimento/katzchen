import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

import { Header, HeaderTitle, HeaderButtons, ScreenContainer } from "./styled";
import ButtonIcon from "../../components/ButtonIcon";
import { iconCreator } from "../../components/helpers/icon.creator";

import CreatePetPresentation from "~/modules/petz/presentation/createpet.presentation";
import GetAllPetsPresentation from "~/modules/petz/presentation/getall.presentation";

const icon = (name: string) => iconCreator(FontAwesome5, name, 24, "#fff");

export default () => {
  const [screen, setScreen] = useState("create");

  return (
    <ScreenContainer>
      <Header>
        <HeaderTitle>
          Meus Katz {iconCreator(FontAwesome5, "cat", 32, "#fff").getIcon()}
        </HeaderTitle>
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
            icon={icon("home")}
            onPress={() => setScreen("")}
            rounded
          />
          <ButtonIcon
            icon={icon("plus-circle")}
            title="Cadastrar"
            onPress={() => setScreen("create")}
          />
        </HeaderButtons>
      </Header>
      {screen === "" && <GetAllPetsPresentation />}
      {screen === "create" && <CreatePetPresentation />}
    </ScreenContainer>
  );
};
