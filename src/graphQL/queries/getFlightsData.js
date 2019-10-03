import gql from 'graphql-tag';

const GET_FLIGHTS = gql`
query FLIGHTS($cityFrom: String!,$cityTo: String!) {
    getAvailableFlights(cityFrom: $cityFrom, cityTo:$cityTo) {
    flightID
    cityTo
    cityFrom
    fromAirport
    toAirport
    departure
    arrival
    duration
    legs {
        flightNo
    }
  }
}
`;

export default GET_FLIGHTS;