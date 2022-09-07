import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Tabs.module.css'
import cx from 'clsx';

const tabList = [
    {name:'Code',pathname:'/code'},
    {name:'Issue',pathname:'/issue'},
    {name:'Pull request',pathname:'/pullrequest'},
    {name:'Action',pathname:'/action'},
    {name:'Project',pathname:'/project'},
]
    

function Tabs() {
    
    
    const pathname = useLocation();
    console.log({pathname})

    return (
        <ul className={styles.tabList}>
            {tabList.map((tab,idx)=>(
                <Tab
                key={`${idx}`} 
                item = {tab}
                selected =  {(pathname === '/' ? '/issue':pathname) ===tab.pathname}/>
            ))}
        </ul>)
}

export default Tabs;

function Tab({ item, selected, number }) {
    return (
        <li>
            <Link to={item.pathname}className={styles.link}>
            <button
                className={cx(styles.tab, { [styles.selected]: selected })}>
                <span>{item.name}</span>
                {number && <div className={styles.circle}>{number}</div>}
            </button>
            </Link>
        </li>
    );
}


