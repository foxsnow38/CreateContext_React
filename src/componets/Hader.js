import React, { useContext } from 'react'
import useTheme from '../Context/ThemeContext'

function Hader() {
const {themeColor}= useTheme()

  return (
    <div style={{background:themeColor,width:`200px`,height:`150px` }}>Active Theme: {themeColor} </div>
  )
}

export default Hader