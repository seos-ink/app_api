import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import estilo from "./_estilo";

export default function Index() {
  return (
    <ScrollView>
      <View style={estilo.box}>
        <Image source={require("../../assets/images/lain-dance.gif")} style={estilo.imagem} />
        <View style={{ display: "flex" }}>
          <Text style={estilo.titulo}>Olá, mundo!</Text>
          <Text style={estilo.subtitulo}>Este é o meu primeiro app em React Native.</Text>
        </View>
      </View>

      <View style={estilo.box}>
        <Image source={require("../../assets/images/gundam.gif")} style={estilo.imagem} />
        <View>
          <Text style={estilo.titulo}>Atividade de React Native</Text>
          <Text style={estilo.subtitulo}>abcdefghijklmnopqrstuvwxyz</Text>
        </View>
      </View>
    </ScrollView>
  );
}


