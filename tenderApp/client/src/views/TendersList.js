import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ShowTendersTable() {
    const [tenders, setTenders] = useState([]);

    const getTenders = () => {
        Axios.get("http://localhost:5001/getTenders").then((response) => {
            console.log(response);
        });
    };

    return(
        <div>
            <button onClick={getTenders}>Show tenders</button>
        </div>
    );
}

export default ShowTendersTable;