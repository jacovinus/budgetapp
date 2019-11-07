import React from 'react';

export const Error = ({error}) => {
    return (
        <div>
                 <p className="alert alert-danger error">
        {error}
        </p>
        </div>
    );
};
export default Error;