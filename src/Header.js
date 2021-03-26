import React from 'react';
import './Header.css';

function Header(props) {

    // const headerStyle = {background: '#151515', color: '#ffffff', padding: 30, textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase'};
    return (
        // <div style={headerStyle}>
        <div className="header">
        {props.heading}
    </div>
    );
} 

export default Header;