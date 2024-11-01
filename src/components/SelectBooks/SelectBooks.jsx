import React, { useEffect, useState } from 'react';
import { getLoadData } from '../utilities/LocalStorage';

const SelectBooks = ({ loadAllData }) => {
    const [selectedData, setSelectedData] = useState([])
    useEffect(() => {
        const loadSelectData = getLoadData()
        const converInt = loadSelectData.map(data => parseInt(data))
        const filterData = loadAllData.filter(data => converInt.includes(data.bookId))
        setSelectedData(filterData)
    }, [])
    return (
        <div>
            <h1>there is listed books here</h1>
        </div>
    );
};

export default SelectBooks;