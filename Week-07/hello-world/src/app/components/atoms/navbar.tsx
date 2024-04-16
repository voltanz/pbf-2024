import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/app/utilities/contexts/mycontext";
import { themes } from "@/app/utilities/themes/mythemes";



export default function Navbar(){
    const { toggleTheme, theme } = useContext(ThemeContext);
    const newThemeName = theme === themes.dark ? 'light' : 'dark';
    return(
        <div 
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25
            }}>
            <div> My Website</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contacts"> Contacts</Link>
                <Link href="/profile">Profile</Link>
                <button onClick={toggleTheme}>Set {newThemeName} theme</button>
            </div>
        </div>
    )
}