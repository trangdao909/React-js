import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.len <5) {
        validationMessage = 'Text too short';
    }
    return (
        <div>            
           {validationMessage}
        </div>
    )
};

export default validation;