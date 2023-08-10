import React, { useState, useEffect } from 'react';
import { SortList } from './list';
import { SortPanel } from './screen-panel';


const apiUrl = process.env.REACT_APP_API_URL
export const SortScreen = ()=>{
  const [salesData, setSalesData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [param, setParam] = useState({InvoiceID : '',
  Branch : '',
  City : '',
  Customertype : '',
  Gender : '',
  Productline : '',
  Unitprice : '',
  Quantity : '',
  Tax5percentage : '',
  Total : '',
  Date : '',
  Time : '',
  Payment : '',
  cogs : '',
  grossMarginPercentage : '',
  grossincome  : '',
  Rating: ''});
  
  useEffect(() => {
    // Fetch JSON data
    fetch(`${apiUrl}/salesData`)
      .then(response => response.json())
      .then(salesData => {
        setSalesData(salesData);
        setTableHeaders(Object.keys(salesData[0]));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <div>
    <SortPanel setSalesData={setSalesData} salesData={salesData}param={param} setParam={setParam}/>
      <SortList salesData={salesData} tableHeaders={tableHeaders}/>

  </div>
}

