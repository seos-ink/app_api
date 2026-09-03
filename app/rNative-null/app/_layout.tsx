import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>

    <Stack.Screen name="index" options={{
      title: "theAnalyser mini",
      headerStyle: { backgroundColor: '#104068ff' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    }} />

    <Stack.Screen name="maps" options={{
      title: "Mapas",
      headerStyle: { backgroundColor: '#104068ff' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    }} />

  </Stack>;
}
