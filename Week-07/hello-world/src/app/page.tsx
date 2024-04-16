"use client";
import MyApp from "./components/atoms/myapp";
import MainPage from "@/app/components/templates/main_page";

export default function Home() {
  return <MyApp Component={MainPage} pageProps={undefined}/>;
}