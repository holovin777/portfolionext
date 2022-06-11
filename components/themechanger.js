import Image from 'next/image'
import {useState} from 'react';
import styles from '../styles/ThemeChanger.module.css'

export default function ThemeChanger() {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [fontColor, setFontColor] = useState("white");
  const [moonSun, setMoonSun] = useState("/moon.svg");
  function changeBackgroundColor() {
    if (backgroundColor == "black") {setBackgroundColor("white")} else {setBackgroundColor("black")}
  }
  function changeFontColor() {
    if (fontColor == "white") {setFontColor("black")} else {setFontColor("white")}
  }
  function changeMoonSun() {
    if (moonSun == "/moon.svg") {setMoonSun("/sun.svg")} else {setMoonSun("/moon.svg")}
  }
  function changeTheme() {
    changeBackgroundColor();
    changeFontColor();
    changeMoonSun();
  }
  return (
    <div className={styles.themechanger}>
      <button
        onClick={changeTheme}
      >
        <Image
	  className={styles.image}
          src={moonSun}
          alt="Picture of the sun"
          width={42}
          height={42}
        />
      </button>
      <style jsx global>{`
        body {
          background-color: ${backgroundColor};
          color: ${fontColor};
        }
	button {
	  background-color: ${backgroundColor};
	  border-color: ${backgroundColor};
          border: none;
	}
      `}</style>
    </div>
  )
}
