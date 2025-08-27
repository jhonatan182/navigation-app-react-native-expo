import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Slot />
    </>
  );
}
