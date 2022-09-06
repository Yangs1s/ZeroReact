import React from 'react';
import styles from './Listitem.module.css'
import ListItemLayOut from '../ListItemLayOut/ListItemLayOut'
import Badge from '../Badge/Badge';
import * as dayjs from 'dayjs';

function Listitem({ checked, onChangeChkBox, onClickTitle, data, }) {
    const badges = data.labels;
    const numbers = data.number;
    const state = data.state === 'open' ? 'opened' : 'closed'
    const user = data.user.login
    const date = data.state === 'open' ? data.created_at : data.closed_at;

    return (
        <ListItemLayOut checked={checked} onClick={onChangeChkBox}>
            <div>
                <div role="button" onClick={onClickTitle} className={styles.title}>
                    {data.title}
                    {badges.length > 0 && 
                        badges.map((props, idx) => <Badge {...props} key={`${idx}`} />)}
                </div>
                <div className={styles.description}>
                    #{numbers} {state} {date} by {user} </div>
            </div>
        </ListItemLayOut>


    );
}

export default Listitem;