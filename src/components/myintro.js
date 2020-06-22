// import { Link } from "gatsby"
import React from "react"
import TextScramble from "../utility/TextScramble"
import styles from "./myintro.module.css"

const phrases = [
    "Ashok Kumar",
    "A Husband",
  "A Father,",
  "Frontend Developer",
  "Analytics Developer",
  "Team Player",
]

class MyIntro extends React.Component {
    componentDidMount () {
        initScramble();
    }
    render(){
        return (
            <section className={styles.myIntro}>
                <div className={styles.intro}>
                    Hello, I'm <span id="txt-intro" className={styles.myIntroTxt}>Ashok Kumar</span>
                </div>
            </section>
        )
    }
}
const initScramble = () => {
  const el = document.querySelector("#txt-intro")
  const fx = new TextScramble(el)

  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
  }

  next()
}

export default MyIntro
