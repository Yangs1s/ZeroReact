import styles from './Badge.module.css'
import React from 'react';


function Badge({name ,color}) {
    return (
       <span className={ styles.Badge } style={{background:`#${color}`}}>{name}</span>
       
    );
}

export default Badge;