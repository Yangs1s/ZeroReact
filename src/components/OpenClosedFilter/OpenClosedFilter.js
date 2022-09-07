import styles from './OpenClosedFilter.module.css'
import clsx from 'clsx';
import React, { useState } from 'react';

function OpenClosedFilter({ isOpenMode, onClickMode }) {
    // const openModeDataSize = 1
    // const closedModeDataSize = 2

    return (
        <>
            <OpenClosedFilters
                // size={openModeDataSize}
                state={"Open"}
                selected={isOpenMode}
                onclick={() => onClickMode('open')} />

            <OpenClosedFilters
                // size={closedModeDataSize}
                state={"Closed"}
                selected={!isOpenMode}
                onclick={() => onClickMode('closed')} />
        </>
    )
}

function OpenClosedFilters({ size, state, selected, onclick }) {
    return (
        <span
            role="button"
            className={clsx(styles.textfilters, { [styles.selected]: selected })}
            onClick={onclick}
        >
            {size} {state}</span>
    )
}
export default OpenClosedFilter;