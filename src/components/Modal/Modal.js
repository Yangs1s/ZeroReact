import styles from './Modal.module.css'

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

function Modal({ 
    opened,
    title,
    onClose,
    placeholder,
    searchDataList,
onClickCell }) {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData,setFilterdData] = useState(searchDataList)

    useEffect(()=>{
        setFilterdData(searchDataList)
    },[searchDataList])

    useEffect(()=>{
        if(searchValue !== ''){
            setFilterdData(searchDataList)
        }else{
            const filteredSearchList = searchDataList.filter((item) => 
            item.name.toLowerCase().includes(searchValue.toLowerCase()),)
            setFilterdData(filteredSearchList)
            
        }
        // setFilterdData(['Apple'])
    },[searchDataList,searchValue])
    return (
        <div className={clsx(styles.modal,{[styles.opened]:opened})}>
            <div className={styles.header}>
                <span>Filter by { title }</span>
                <button onClick={onClose}>X</button>
            </div>
            <div className={styles.input}>
                <input 
                placeholder={placeholder} 
                value={searchValue}
                onChange = {(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className={styles.list}>
            {filteredData.map((data)=> (
            <div 
            key={data.name} 
            onClick ={()=> {
                const isLabel = title.toLowerCase() === 'label'
                const paramKey = isLabel ? 'labels':title.toLowerCase();
                onClickCell({ [paramKey]: data.name })} 
            }
                
            role="button" 
            className={styles.items}>
                {data.name}</div>
            ))}
            </div>
        </div>
    );
}

export default Modal;