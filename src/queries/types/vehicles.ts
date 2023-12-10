/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VehicleFilterInput, VehicleSortInput } from "./../../models/graphql-global-types";

// ====================================================
// GraphQL query operation: vehicles
// ====================================================

export interface vehicles_vehicles_nodes {
  __typename: "Vehicle";
  id: number;
}

export interface vehicles_vehicles {
  __typename: "VehiclesConnection";
  totalCount: number;
  /**
   * A flattened list of the nodes.
   */
  nodes: (vehicles_vehicles_nodes | null)[] | null;
}

export interface vehicles {
  vehicles: vehicles_vehicles | null;
}

export interface vehiclesVariables {
  last?: number | null;
  first?: number | null;
  filter?: VehicleFilterInput | null;
  order?: VehicleSortInput[] | null;
}
