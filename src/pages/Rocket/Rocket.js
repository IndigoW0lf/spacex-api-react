import React from 'react';
import { gql, useQuery } from '@apollo/client';
//components
import Error from './../../components/Error';
import Loader from './../../components/Loader';

const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($rocketId: ID!)
    {
        rocket(id: "starship:) {
            name
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            stages
            cost_per_launch
            engines {
                type
                number
                propellant_1
                propellant_2
                thrust_to_weight
            }
        }
    }
`;

const RocketPage = ({ match }) => {
    const rocketId = match.params.id;
    console.log({ rocketId });

    const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
        variables: { rocketId },
    });

    if (loading) return <Loader />
    if (error) return <Error error={error} />

    console.log (data.rocketId);
    return null;
};

export default RocketPage;
