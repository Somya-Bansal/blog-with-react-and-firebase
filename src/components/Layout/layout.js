import React from "react"

import Header from "../Header/header"
import styles from "./layout.module.scss"

const Layout = ({children}) => (
    <div className={styles.layoutContainer}>
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
    </div>
);

export default Layout;
