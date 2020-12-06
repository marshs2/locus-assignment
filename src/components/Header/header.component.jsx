import React from 'react';
import "./header.styles.scss";

class Header extends React.Component {
    render() {
        return (
            <header className="header-container">
                <div className="header">
                    <div className="app-name">
                        Locus Assignment
                    </div>
                </div>
            </header>
        )
    }
} 

export default Header;