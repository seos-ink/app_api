import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Gyroscope } from 'expo-sensors';
import estilo from "./_estilo";

export default function Index() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Gyroscope.setUpdateInterval(1000);
  const _fast = () => Gyroscope.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener(gyroscopeData => {
        setData(gyroscopeData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

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

      <View style={estilo.box}>
        <Text style={estilo.titulo}>Gyroscope:</Text>
        <Text style={estilo.valor}>x: {x}</Text>
        <Text style={estilo.valor}>y: {y}</Text>
        <Text style={estilo.valor}>z: {z}</Text>
        <View style={estilo.buttonContainer}>
          <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={estilo.button}>
            <Text>{subscription ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_slow} style={[estilo.button, estilo.middleButton]}>
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_fast} style={estilo.button}>
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}


