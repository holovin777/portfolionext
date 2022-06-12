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
	className="button-image"
        onClick={changeTheme}
      >
        <Image
	  className={styles.image}
          src={moonSun}
          alt="Picture of the moonSun"
          width={28}
          height={28}
        />
      </button>
      <style jsx global>{`
        body {
          background-color: ${backgroundColor};
          color: ${fontColor};
        }
	.button-image {
	  background-color: transparent;
          border: none;
	}
      `}</style>
    </div>
  )
}
