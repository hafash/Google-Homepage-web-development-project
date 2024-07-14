import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetProductByIdQuery } from '../app/service/API';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
    const query = useQuery();
    const id = query.get('query');
    const { data, isError, isLoading } = useGetProductByIdQuery(id);

    if (isError) {
        return <h1>We encountered an error.</h1>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{data?.brand}</h1>
            <h1>{data?.category}</h1>
            <h1>{data?.description}</h1>
        </div>
    );
};

export default SearchResults;
