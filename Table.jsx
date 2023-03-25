import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './Table.module.css';

const Table = () => {
    const [fetchData, setFetchData] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(resp => setFetchData(resp.data));
    }, []);

    const keys = ['name', 'username', 'email'];

    return (
        <div className={Style.container}>
            <input type="text" placeholder='Search...' onChange={(e) => setSearchData(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchData.filter((item) => {
                        return keys.some((val) => item[val].toLowerCase().includes(searchData));
                    }).map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.address.city}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
