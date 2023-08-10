import React, { useState, useEffect } from 'react';

const apiUrl = process.env.REACT_APP_API_URL
export const NewScreen = ()=>{
  const [salesData, setSalesData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

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

  return (
    <div>
      <h2>Super Market Data Table</h2>
      <table>
        <thead>
          <tr>
          <th>S.No</th>
            <th>Invoice ID</th>
            <th>Branch</th>
            <th>City</th>
            <th>Customer type</th>
            <th>Gender</th>
            <th>Product line</th>
            <th>Unit price</th>
            <th>Quantity</th>
            <th>Tax 5 percentage</th>
            <th>Total</th>
            <th>Date</th>
            <th>Time</th>
            <th>Payment</th>
            <th>cogs</th>
            <th>gross Margin Percentage</th>
            <th>grossincome</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {salesData.map((salesData, index) => (
            <tr key={index}><td>{index+1}</td>
              {tableHeaders.map((header) => (
                <td key={header}>{salesData[header]}</td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

