import React from 'react'

import styles from './loader.module.scss'

class Loader extends React.Component {
    render(){
        return(
            <div className={styles.loader}>
                <h2>Loading...</h2>
            </div>
        )
    }
}
export default Loader;