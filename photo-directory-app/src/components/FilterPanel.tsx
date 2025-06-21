import React from 'react';

const FilterPanel = ({ onFilterChange }) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div>
            <h3>Filter Photos</h3>
            <select onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
                <option value="wildlife">Wildlife</option>
            </select>
        </div>
    );
};

export default FilterPanel;