import React from 'react';

interface PaginationControlsProps {
    itemsPerPage: number;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ itemsPerPage, onItemsPerPageChange }) => {
    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onItemsPerPageChange(Number(e.target.value));
    };

    return (
        <div className="pagination-controls">
            <label htmlFor="items-per-page">Show: </label>
            <select id="items-per-page" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    );
};

export default PaginationControls;
