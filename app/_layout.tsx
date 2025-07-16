import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="Calculator" options={{ title: "Calculator" }} />
    </Stack>
  );
}
