import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{
      title: "API com React Native",
      headerStyle: { backgroundColor: '#3fb39aff' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }} />
  </Stack>;
}
