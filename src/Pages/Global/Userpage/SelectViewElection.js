import React from 'react'
import UserNavbar from './Components/UserNavbar'
import { Link } from 'react-router-dom';
import styles from '../Styles/dashboard.module.css'

function SelectViewElection() {
    return (
        <div className={styles.container}>
            <UserNavbar />
            <div className={styles.content}>
                <h1 className={styles.title}>Select Election Type</h1>
                <div className={styles.cardContainer}>
                    <Link to={"/user/elections/view/open"}>
                        <div className={styles.card}>
                            <h2>Open Elections</h2>
                            <p>View all ongoing democratic elections</p>
                        </div>
                    </Link>
                    <Link to={"/user/elections/view/closed"}>
                        <div className={styles.card}>
                            <h2>Closed Elections</h2>
                            <p>View all ongoing institutional and departmental elections</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SelectViewElection