import React, { useState } from 'react';
import Table from './Table';
import Style from './DataFetch.module.css';

const DataFetch = () => {
    const [selected, setSelected] = useState('');
    console.log(selected);

    

    let componentRun = () => {
        switch (selected) {
            case 'persionalDetails':
                return componentRun = <Table />;

            case 'studentRecords':
                return componentRun = <h1>No Record Found</h1>;

            default:
                return componentRun = null;

        }
    }
    return (
        <div className={Style.container}>
            <h1>Students Details</h1>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="">--- Select ---</option>
                <option value="persionalDetails" >Persional Details</option>
                <option value="studentRecords">Students Records</option>
            </select>
            {componentRun()}
        </div>
    );
}

export default DataFetch;
