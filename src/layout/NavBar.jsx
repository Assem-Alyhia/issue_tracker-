import { Link } from 'react-router-dom';
import './layout.css';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const NavBar = () => {
    const [open, setOpen] = useState(false); 

    const toggleSelect = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <>
            <header id="main-header">
                <Link to="/">
                    <img
                        id="logo"
                        src="./log.png"
                        alt="Logo"
                        style={{ width: '4rem' }}
                    />
                </Link>
                <nav className="unique-nav-links">
                    <Link to="/">Home</Link>
                    <div className="unique-dropdown">
                        <a href="#">Select1 ▾</a>
                        <div className="unique-dropdown-content">
                            <Link to="/page1">page1</Link>
                            <Link to="/page2">page2</Link>
                            <Link to="/page3">page3</Link>
                        </div>
                    </div>
                    <Link to="/page">page</Link>
                    <div className="unique-dropdown">
                        <a href="#">Select2 ▾</a>
                        <div className="unique-dropdown-content">
                            <Link to="/page1">page1</Link>
                            <Link to="/page2">page2</Link>
                        </div>
                    </div>
                    <div className="unique-dropdown">
                        <a href="#">More ▾</a>
                        <div className="unique-dropdown-content">
                            <Link to="/page1">page1</Link>
                        </div>
                    </div>
                </nav>
                <div className="unique-auth-buttons">
                    <Link to="/login">
                        <button className="login">Log In</button>
                    </Link>
                    <Link to="/register">
                        <button className="unique-free-trial">register</button>
                    </Link>

                    <div className="unique-language-selector" style={{ display: 'flex', alignItems: 'center' }}>
                        <FormControl
                            variant="outlined"
                            size="small"
                            sx={{
                                minWidth: 120,
                                background:'none !important',
                                borderRadius: '15px',
                                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                            }}
                        >
                            <InputLabel sx={{ fontSize: '0.8rem' , color:'#fff'}}>Language</InputLabel>
                            <Select
                                value="en" // default language
                                onChange={(e) => console.log(e.target.value)} // handle language change
                                label="Language"
                                open={open} 
                                onClick={toggleSelect} 
                                onClose={() => setOpen(false)}
                                sx={{
                                    height: '40px',
                                    '.MuiSelect-select': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: '35px',
                                        borderRadius: '15px',
                                        color:'#fff',
                                        backgroundColor:'none',
                                    }
                                }}
                            >
                                <MenuItem value="en" sx={{ color:'#000' , background:'none !important' , padding:'2rem 1rem 1rem'}} >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                                        alt="US Flag"
                                        style={{
                                            width: '20px',
                                            height: '15px',
                                            marginRight: '10px',
                                        }}
                                    />
                                    English
                                </MenuItem>
                                <MenuItem value="ar" sx={{ color:'#000' ,background:'none !important'}}>
                                    <img
                                        src="/country/syria.png"
                                        alt="Arabic Flag"
                                        style={{
                                            width: '20px',
                                            height: '15px',
                                            marginRight: '10px',
                                        }}
                                    />
                                    العربية
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
