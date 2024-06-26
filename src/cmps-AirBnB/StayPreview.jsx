import React from 'react';

export function StayPreview({ preview, onClick }) {
    return (
        <div className='stay-preview border' onClick={onClick}>
            {preview}
        </div>
    );
}
