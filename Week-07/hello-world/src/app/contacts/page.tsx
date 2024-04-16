"use client";

import MyApp from "../components/atoms/myapp";
import ContactsPage from "../components/templates/contact_page";


export default function Home() {
    return <MyApp Component={ContactsPage} pageProps={undefined} />;
}