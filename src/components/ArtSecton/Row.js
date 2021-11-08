import React, { useState, useEffect } from 'react'

function Row({title}) {
    
    const [art, SetArt] = useState([]);
    
    useEffect(() => {
        
        //if []. run once when the row loads, and don't run again
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/* container -> poster */}
        </div>
    )
}

export default Row
