import React from 'react';
import styles from './Footers.module.css'

const footItems = [
    {title:'Terms' , link:'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service'}, 
    {title:'Privacy' , link:'https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement'}, 
    {title:'Security' , link:'https://github.com/security'}, 
    {title: 'Status' , link:'https://www.githubstatus.com'}, 
    {title:'Docs' , link:'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service'}, 
    {title:'Contact GitHub' , link:'https://docs.github.com/en'}, 
    {title:'Pricing' , link:'https://github.com/pricing'}, 
    {title:'API' , link:'https://docs.github.com/en'}, 
    {title:'Training' , link:'https://services.github.com/'}, 
    {title:'Blog' , link:'https://github.blog/'}, 
    {title:'About' , link:'https://github.com/about'}, 
]


function Footers() {
    return (
        <div className={styles.footer}>
            <ul className={styles.footerContainer}>
                <span className={styles.gitInc}>© 2022 GitHub, Inc.</span>
                {footItems.map(({title,link}) =>(
                <li key={title} className={styles.item}>
                    <a  className={styles.list} href={link}>
                        {title}</a>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Footers;



