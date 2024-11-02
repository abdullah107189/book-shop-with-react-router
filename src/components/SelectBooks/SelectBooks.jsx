import React, { useEffect, useState } from 'react';
import { getLoadData } from '../utilities/LocalStorage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SeletectSingleData from '../SelectSingleData/SeletectSingleData';

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
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                {/* read list books here  */}
                <TabPanel>
                    <div>
                        {
                            selectedData.map(data => <SeletectSingleData key={data.bookId} data={data}></SeletectSingleData>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SelectBooks;