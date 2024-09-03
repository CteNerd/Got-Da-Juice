import React from 'react';

interface PageNavigationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PageNavigationControls: React.FC<PageNavigationControlsProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    return (
        <div className="page-navigation-controls">
            <button onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    className={index + 1 === currentPage ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
            <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default PageNavigationControls;
