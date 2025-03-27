import React from 'react';

export default function Button({ className = "", label = "Text Me", onClick }) {
    return (
        <button
            onClick={onClick}
            className={` px-4 py-2 rounded-xl ${className}`}
        >
            {label}
        </button>
    );
}
