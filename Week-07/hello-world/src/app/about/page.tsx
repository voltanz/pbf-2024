"use client";

import MyApp from "../components/atoms/myapp";
import AboutPage from "../components/templates/about_page";



export default function Home() {
    return <MyApp Component={AboutPage} pageProps={undefined} />;
}