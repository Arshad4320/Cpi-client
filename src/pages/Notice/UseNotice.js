import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Notice from './Notice';

const UseNotice = () => {
    const client = new QueryClient();
    return (
        <div>
            <QueryClientProvider client={client}>
              <Notice/>
            </QueryClientProvider>
        </div>
    );
};

export default UseNotice;