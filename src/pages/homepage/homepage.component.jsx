import React from 'react';
import "./homepage.styles.scss";
import Autocomplete from "../../components/Autocomplete/Autocomplete.component";

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Autocomplete />
            </div>
        )
    }
} 

export default HomePage;