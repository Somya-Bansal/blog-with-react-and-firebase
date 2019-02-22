import React from "react"

import styles from "./header.module.scss"

const NavLink = props => (
    <li className={styles.navListItem}>
        <a href={props.to}>{props.children}</a>
    </li>
)
class Header extends React.Component {
    render () {
        return (
            <header className={styles.headerMain}>
                <ul className={styles.navList}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about/">About</NavLink>
                    <NavLink to="/skills/">Skills</NavLink>
                    <NavLink to="/resume/">Resume</NavLink>
                    <NavLink to="/blog/">Blog</NavLink>
                </ul>
            </header>
        )
    }
}

export default Header;