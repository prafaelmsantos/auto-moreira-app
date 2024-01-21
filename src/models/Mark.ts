import { marks_marks_nodes as marksGraphQL } from "../queries/types/marks";

export interface IMark {
  id: number;
  name: string;
}

export function convertToMark(mark: marksGraphQL): IMark {
    return {
        id: mark.id,
        name: String(mark.name)
    };
}
