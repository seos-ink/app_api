import { HeaderBackground } from "@react-navigation/elements";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{
      title: "API com React Native",
      headerStyle: { backgroundColor: '#1e6b5aff' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    }} />

    <Stack.Screen name="maps" options={{
      title: "Mapa",
      headerStyle: { backgroundColor: '#1e6b5aff' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    }} />

    <Stack.Screen name="insert" options={{
      title: "Inserir Usuário",
      headerStyle: { backgroundColor: '#1e6b5aff' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    }} />
  </Stack>;
}
