import styles from './ListItemLayOut.module.css'

import React, { Children } from 'react';
import cx from 'clsx'
function ListItemLayOut({children,className}) {
    return (
    <div className={cx(styles.wrapper, className)}>
        <input 
        type="checkbox" 
        className={styles.checkBox} 
        // value={checked} 
        // onChange={onChangeChkBox}
        />
        {children}
    </div>
    )
}

export default ListItemLayOut;