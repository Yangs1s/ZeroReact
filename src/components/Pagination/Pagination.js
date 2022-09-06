import styles from './Pagination.module.css'
import React from 'react';
import clsx from 'clsx';
function Pagination({ currentPage, maxPage, onClickPageButton}) {
    return (
        <>
        <button 
        className={clsx(styles.button,styles.blueButton)}
        disabled={currentPage===1}
        >
            {'< Preview'}</button>
        {new Array(maxPage).fill(null).map((_, i) =>(
            <PageButton
            key = {i}
            number={i+1} 
            onClick={onClickPageButton}
            selected ={i+1 === currentPage}
            />
        ))}
        <button       
        className={clsx(styles.button,styles.blueButton)}
        disabled={currentPage===maxPage}>{'Next >'}</button>
        </>
    );
}

function PageButton({ number,onClick,selected }){
    return(
        <button
        onClick={()=>onClick(number)} 
        className={clsx(styles.button, {[styles.selected]:selected})}>{ number }</button>
    )

}

export default Pagination;