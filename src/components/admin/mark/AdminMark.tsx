/** @format */

import {useAppDispatch} from "../../../redux/hooks";
import {useQuery} from "@apollo/client";
import {MARKS} from "../../../queries/Marks";
import {marks, marks_marks_nodes} from "../../../queries/types/marks";
import {convertToMark} from "../../../models/Mark";
import {useEffect} from "react";
import {setLoader} from "../../../redux/loaderSlice";
import MarksTable from "./table/MarksTable";

export default function AdminMark() {
  const {data, loading} = useQuery<marks>(MARKS);
  const marks =
    data?.marks?.nodes?.map((mark) =>
      convertToMark(mark as marks_marks_nodes)
    ) ?? [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoader(loading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <main>
      <MarksTable {...{marks}} />
    </main>
  );
}
