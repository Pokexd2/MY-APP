import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Image style={styles.logo} source={require("../../assets/Poké_Ball_icon.svg.png")} />
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    height: 40,
    width: 40,
  },
  logoContainer: {
    alignItems: 'center'
  },
  title: {
    backgroundColor: Colors.white,
    borderColor: Colors.platinum,
    borderRadius: 20,
    borderWidth: 1,
    color: Colors.jet,
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.size.normal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  }
});