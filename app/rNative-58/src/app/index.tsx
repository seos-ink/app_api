import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import estilo from "./_estilo";

export default function Index() {
  return (
    <ScrollView>
      <View style={estilo.box}>
        <Text style={estilo.titulo}>Olá, mundo!</Text>
        <Text style={estilo.subtitulo}>Este é o meu primeiro app em React Native.</Text>
      </View>

      <View style={estilo.box}>
        <Text style={estilo.titulo}>Atividade de React Native</Text>
        <Text style={estilo.subtitulo}>abcdefghijklmnopqrstuvwxyz</Text>
      </View>
    </ScrollView>
  );
}


