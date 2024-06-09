import { gql } from '@apollo/client';

export const VEHICLES = gql`
    query vehicles($after: String,$last: Int, $first: Int, $filter: VehicleFilterInput, $order: [VehicleSortInput!]) {
        vehicles(where: $filter, order: $order, first: $first, last: $last, after: $after) {
            totalCount
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              id
              modelId
              model {
                id
                name
                markId
                mark {
                  id
                  name
                }
              }
              year
              color
              observations
              mileage
              price
              fuelType
              version
              doors
              transmission
              engineSize
              power
              opportunity
              sold
              vehicleImages {
                id
                url
                isMain
              }
            }
        }
    }
`;
