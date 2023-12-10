import { gql } from '@apollo/client';

export const VEHICLES = gql`
    query vehicles($last: Int, $first: Int, $filter: VehicleFilterInput, $order: [VehicleSortInput!]) {
        vehicles(where: $filter, order: $order, first: $first, last: $last) {
            totalCount
            nodes {
                id
            }
        }
    }
`;
