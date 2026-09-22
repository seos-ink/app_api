import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{
      title: "index",
      headerStyle: { backgroundColor: '#001a53ff' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    }} />
  </Stack>;
}
