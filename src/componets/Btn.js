import {useContext} from 'react'
import useTheme from '../Context/ThemeContext'
function Btn() {
    const {themeColor,setThemeColor} =useTheme()
console.log(themeColor)
    return (

 <div><button onClick={()=> themeColor==`black`?setThemeColor(`white`):setThemeColor(`black`)}><h1>BTN</h1></button>
 <br />
 <br />
 Active Theme: {themeColor}
 </div>
  )
}

export default Btn