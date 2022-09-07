import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Buttons';
import styles from '../ListContainer/ListContainer.module.css'
import ListItem from '../components/ListItem/Listitem';
import ListItemLayOut from '../components/ListItemLayOut/ListItemLayOut';
import FilterList from '../components/FilterList/FilterList';
import Pagination from '../components/Pagination/Pagination';
import axios from 'axios';
import OpenClosedFilter from '../components/OpenClosedFilter/OpenClosedFilter';
import { GITHUB_API } from '../api'
import { useSearchParams } from 'react-router-dom';


function Listcontainer() {
    const [inputValue, setInputValue] = useState('is:pro')
    const [checked, setChecked] = useState(false)
    const [list, setList] = useState([])
    // const [params, setParams] = useState()

    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page')?? '1',10);
    const state = searchParams.get('state')
    const maxPage = 10;
    

    async function getData(params) {
        const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`,{
            params,
        })
        setList(data.data)
    }

    useEffect(() => {
        getData(searchParams);
    }, [searchParams])


    return (
        <>
            <div className={styles.listContainer}>
                <div className={styles.topSection}>
                    <input
                        className={styles.input}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button
                        style={{
                            fontSize: '14px',
                            backgroundColor: '#2da44e',
                            color: '#fff'
                        }}>
                        New issue
                    </Button>
                </div>
                <OpenClosedFilter isOpenMode={state !== 'closed'} onClickMode ={(mode) => setSearchParams({mode})}/>
                <div className={styles.container}>
                <ListItemLayOut className={styles.filter}>
                    <FilterList onChangeFilter={(params) => {
                        // 필터링된 요소에 맞게 데이터를 불러와야한다.
                        //const data = getData('필터링된 데이터')
                        setSearchParams(params) 
                    }} />
                </ListItemLayOut>
                    {list.map((item) => (
                        <ListItem
                            key={item.id}
                            data = {item}
                            checked={checked}
                            onChangeChkBox={()=> setChecked((checked)=> !checked)}
                        
                        />
                    ))}
                </div>
            </div>
            <div className={styles.PaginationContainer}>
                <Pagination 
                currentPage={page} 
                onClickPageButton={(pageNumber) => setSearchParams({page:pageNumber})}
                maxPage={maxPage} 
                
                />
                </div>
        </>
    );
}



export default Listcontainer;