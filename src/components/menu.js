import { Link } from "gatsby"
import React from "react"
import Styles from "./menu.module.css"
const Menu = () => (
    <nav className={Styles.nav}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
)

export default Menu


