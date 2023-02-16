import { useState } from "react";
import { Image, View, Text, Button } from "react-native";
import Toast from "react-native-toast-message";

import { DataLoaderErrorMessage } from "~/ui/hooks/data/data-loader";

export default ({
  error: { title = "MIAU! Pelos bigodes de Fígaro!", recoverable = true },
  error,
}: any): JSX.Element => {
  const [isVisible, setIsVisible] = useState<any>(true);

  function NonRecoverable(err: DataLoaderErrorMessage): JSX.Element {
    return (
      <View style={[!err.hasError && { display: "none" }]}>
        <Text style={{ fontSize: 20, marginTop: 35, fontWeight: "bold" }}>
          MIAU! Pelos bigodes de Fígaro! (NonRecoverable)
        </Text>
        <Text style={{ fontSize: 12 }}>
          Houve um problema, mas não se preocupe. Estamos resolvendo.
        </Text>
        <Image source={require("~/ui/assets/purr-error.png")} />
        <Text>{err.message}</Text>
        <Button title="Fechar[x]" onPress={() => setIsVisible(false)} />
      </View>
    );
  }

  if (error.hasError && recoverable) {
    Toast.show({
      type: "error",
      text1: title,
      text2: `${error.message} 🙀`,
    });
  }

  return isVisible && !recoverable && NonRecoverable(error);
};
