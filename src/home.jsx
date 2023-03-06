import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Pagina inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/sobre">sobre</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Home;