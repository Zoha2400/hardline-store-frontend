import React from 'react';

function SerachLine() {
    return (
        <div className="w-full flex justify-end">
            <input className="p-2 text-xs bg-neutral-700 focus:bg-neutral-600 focus:outline-none duration-300 rounded-xl" type="text" placeholder="Search your device..."/>
        </div>
    );
}

export default SerachLine;