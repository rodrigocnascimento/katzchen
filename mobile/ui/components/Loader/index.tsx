import { Image, View, Text } from "react-native";

export default ({ message }: any): JSX.Element => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginTop: 35, fontWeight: "bold" }}>
        MIAU! Aguarde um pouco :3
      </Text>
      <View>
        <Image
          source={require("~/ui/assets/purr-loader.gif")}
          style={{
            width: 180,
            height: 180,
          }}
        />
      </View>
      <Text style={{ fontSize: 18 }}>{message || "Carregando..."}</Text>
    </View>
  );
};
