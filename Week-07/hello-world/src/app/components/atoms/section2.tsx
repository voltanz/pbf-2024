import { LevelContext } from "@/app/utilities/context/mycontext";
import { useContext } from "react";

export default function Section2({children, isFancy}: {children: any, isFancy: boolean}){
    const level = useContext(LevelContext);
    return(
        <section className={'section' + (isFancy?'Fancy':'')}>
            <LevelContext.Provider value={level+1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}