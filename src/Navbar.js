
import React from 'react';

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#282c34',
            padding: '15px',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h2>Student App</h2>

            <div>
                <a href="/" style={{ color: 'white', margin: '10px' }}>Home</a>
                <a href="/about" style={{ color: 'white', margin: '10px' }}>About</a>
                <a href="/contact" style={{ color: 'white', margin: '10px' }}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
