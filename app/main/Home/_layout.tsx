import { Slot } from "expo-router";
import Header from "../../../components/Header";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
}
