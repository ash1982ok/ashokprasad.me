import { Link } from "gatsby"
import React from "react"
import Styles from "./menu.module.css"
const Menu = () => (
    <nav className={Styles.nav}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
)

export default Menu


