import React, { createContext, useState } from "react";

type ThemeProviderProps = {
    children: React.ReactNode
}
type ThemeType = { backgroundColor: string, fontColor: string }
type ChangeThemeType = (e: React.MouseEvent<HTMLButtonElement>) => void
type dataType = { themeObject: ThemeType, changeTheme: ChangeThemeType }


// const ThemeContext = createContext<dataType | null>(null);
const ThemeContext = createContext({} as dataType);

const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [themeObject, setThemeObject] = useState({} as ThemeType);

    const changeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (themeObject.backgroundColor === "#000") {
            setThemeObject({ backgroundColor: "#fff", fontColor: "#000" })
        } else {
            setThemeObject({ backgroundColor: "#000", fontColor: "#fff" })
        }
    }

    let data: dataType = { themeObject, changeTheme }

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider };
export default ThemeContext;



