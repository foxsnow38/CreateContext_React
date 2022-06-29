import {createContext, useContext, useEffect, useState} from 'react'


const ThemeContext= createContext()

export const ThemeProvider = ({children}) => {
  const [themeColor,setThemeColor]  =useState(localStorage.getItem(`theme`)==null?`white`:localStorage.getItem(`theme`))
 if(localStorage.getItem(`theme`)==null) localStorage.setItem(`theme`,`white`)
useEffect(() => {
localStorage.setItem(`theme`,themeColor)

}, [themeColor])

  const values = {
    themeColor,setThemeColor
  }
    return <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
}

const useTheme =() =>useContext(ThemeContext)
export default useTheme