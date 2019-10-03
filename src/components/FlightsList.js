import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_FLIGHTS from "../graphQL/queries/getFlightsData";
import FilterByType from "../const/filterType";

/**
 * Functional component render the flights list
 */
const FlightsList = React.memo(({ cityFrom, cityTo, skip, filterBy }) => {
    const { loading, error, data } = useQuery(GET_FLIGHTS,
        {
            variables: { cityFrom, cityTo },
            skip: skip
        });

    function getFilterData() {
        if (filterBy) {
            let filter = FilterByType.find(x => x.key == filterBy);
            var currentDate = new Date();
            switch (filter.key) {
                case 'A':
                    return data.getAvailableFlights
                case 'D':
                    return data.getAvailableFlights.filter(x => x.legs.length == 0)
                case 'L':
                    return data.getAvailableFlights.filter(x => parseInt(x.duration.split("h")[0]) <= 6)
                case 'T':
                    return data.getAvailableFlights.filter(x => {
                        var arrival = new Date(x.arrival);
                        return arrival.getDate() == currentDate.getDate() && arrival.getHours() <= 23 && arrival.getMinutes() <= 59
                    })
            }

        }
        else {
            return data.getAvailableFlights.slice(0, 10)
        }
    }

    if (loading) return 'Loading...';

    if (error) return `Please select differnt cities`;
    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Depart Time</th>
                    <th>Arriv Time</th>
                    <th>Depart Airport</th>
                    <th>Arriv Airport</th>
                    <th>Depart City</th>
                    <th>Arriv City</th>
                    <th>Arriv Duration</th>
                </tr>
            </thead>
            <tbody>
                {data && getFilterData().map((flight, index) => <tr key={flight.flightID}>
                    <td>{index + 1}</td>
                    <td>{flight.departure}</td>
                    <td>{flight.arrival}</td>
                    <td>{flight.fromAirport}</td>
                    <td>{flight.toAirport}</td>
                    <td>{flight.cityFrom}</td>
                    <td>{flight.cityTo}</td>
                    <td>{flight.duration}</td>
                </tr>)}
            </tbody>
        </table>

    );
})

export default FlightsList;