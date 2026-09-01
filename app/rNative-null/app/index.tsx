import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";

import Styles from "./_style";

export default function Index() {

  return (
    <ImageBackground source={require("../assets/images/ff7_crisiscore.png")} style={{ flex: 1 }}>
      <View style={Styles.bg}>
        <View style={Styles.container}>
          <Text style={Styles.title}>theAnalyser mini</Text>
          <Text style={Styles.list}>This is a React Native app using Expo Router.</Text>

          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.list}>Cadastrar Usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.list}>Encontrar loja mais próxima</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.list}>Cadastrar Usuário</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
}
