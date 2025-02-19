import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormItem from "./components/controls/FormItem";
import Wrapper from "./components/layout/Wrapper";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <Wrapper>
      <Header title="Formulario asi bien aca bien asi" />
      <View style={styles.container}>
        <FormItem label={"Nombre"}  />
        <FormItem label={"Email"} />
        <FormItem label={"Password"}  />
        <StatusBar style="auto" />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
});
