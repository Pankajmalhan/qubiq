import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_FLIGHTS from "../graphQL/queries/getFlightsData";

export default function FlightsList({ cityFrom = 'Milano', cityTo = 'Madrid' }) {
    const { loading, error, data } = useQuery(GET_FLIGHTS,
        {
            variables: { cityFrom, cityTo },
        });

    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;
    console.log(data)

    return (
        <div>Pankaj</div>
    );
}