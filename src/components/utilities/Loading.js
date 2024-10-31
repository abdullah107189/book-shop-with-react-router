import React, { useState } from 'react';

const Loading = (defaultValue) => {
    const [isLoading, setIsLoading] = useState(defaultValue = true)

    return (
        <div>
            {isLoading && <span className="loading w-40 loading-dots "></span>}
        </div>
    );
};

export default Loading;