import React from 'react';
import styles from './Header.module.css'
import Button from '../components/Button/Buttons';
import Space from '../components/Space/Space';
import Tabs from '../components/Tab/Tabs';


function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.buttonContainer}>
          <Button
            style={{
              fontSize: '12px', backgroundColor: 'transparent', color: '#000'
            }}>
            Watch
          </Button>
          <Space />
          <Button
            style={{ fontSize: '14px', backgroundColor: 'transparent', color: '#000' }}>
            Fork <div className={styles.circle}>1</div>
          </Button>
          <Button
            style={{ fontSize: '14px', backgroundColor: 'transparent', color: '#000' }}>
            Star
          </Button>
        </div>
      </div>
      <Tabs/>
    </>
  );
}

export default Header;