import React,{useState} from 'react'

// import { User } from './search-panel';

export const SortList = ({salesData,tableHeaders }) => {
  const [sortedField, setSortedField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortedField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...salesData].sort((a, b) => {
    const aValue = a[sortedField];
    const bValue = b[sortedField];

    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  }); 

  return (
    <div>
      <h2>Super Market Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
          {tableHeaders.map((header) => (
                <th key={header}onClick={() => handleSort(header)}>
                {header} {sortedField === header && <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>}</th>
              ))}
          </tr>
        </thead>
        <tbody>
        {sortedData.map((sortedData, index) => (
            <tr key={index}><td>{index+1}</td>
              {tableHeaders.map((header) => (
                <td key={header}>{sortedData[header]}</td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}