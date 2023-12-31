import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import NavLogo from './assets/vote.png'
import styles from '../../Styles/dashboard.module.css';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function AdminNavbar({adminRoles}) {
    const handleLogout = () => {
        toast.info("Successfully Logged Out !", {
            position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
    });
    setTimeout(() => {
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.location.href = "/";
      }, 500);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <img src={NavLogo} alt="Logo" />
                <span>E-Voting Portal</span>
            </div>
            <div className={styles.navbarRight}>
                <Link to="/admin/dashboard"><IconButton><HomeRoundedIcon sx={{color: 'white'}}/></IconButton></Link>
                <Link onClick={()=>handleLogout()} className={styles.logoutBtn}>Logout</Link>
                <Link to="/admin/profile" state={{adminRoles: adminRoles}}>
                    <div className={styles.avatar}>
                        <Tooltip title='Admin Profile' arrow>
                            <Avatar sx={{ color: 'black', bgcolor: 'white' }}>
                                <PersonIcon />
                            </Avatar>
                        </Tooltip>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default AdminNavbar