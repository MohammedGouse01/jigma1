import React from 'react';
import { useState } from 'react';

export const SortPanel = ({salesData,setSalesData, param, setParam}) => {
    const [sortKey, setSortKey] =useState('Total')
    const [sortedSalesData, setSortedSalesData] =useState([])
    const handleSort = () => {
        const sortedData = [...salesData].sort((a, b) => a[sortKey] - b[sortKey]);
        setSalesData(sortedData);
      };
    return (
        
        <form action={''}>
            <div>
            <button onClick={handleSort}>Sort by {sortKey}</button>    
            </div>
        </form>
    );
};
