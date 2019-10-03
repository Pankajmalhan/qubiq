import ApolloClient from "apollo-boost";
const client = new ApolloClient({
    uri: "https://api.rubiq.tech/graphql"
});

export default client;