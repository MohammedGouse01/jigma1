import React, { useState } from 'react';

const Table = ({ data }) => {
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
  
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[sortedField];
      const bValue = b[sortedField];
  
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });  

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            Name {sortedField === 'name' && <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>}
          </th>
          <th onClick={() => handleSort('age')}>
            Age {sortedField === 'age' && <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>}
          </th>
          {/* Add more table headers here */}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            {/* Render other data cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SortApp = () => {
  const sampleData = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    // Add more sample data objects
  ];

  return (
    <div>
      <h1>Sortable Table</h1>
      <Table data={sampleData} />
    </div>
  );
};

export default SortApp;