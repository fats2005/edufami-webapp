import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FETCH_UNIT_REQUEST } from "./unitActions";

import Layout from "../common/layout";
import Loader from "../common/loader";
import Box from "../common/box";
import CardLesson from "../common/cardLesson";

function UnitPage({ match }) {
  const { unit, lessons, fetching } = useSelector(state => state.unit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_UNIT_REQUEST, id: match.params.unitId });
  }, [dispatch, match.params.unitId]);

  return (
    <>
      <Loader show={fetching} />
      <Layout>
        <Box label={`${unit.name} / Lecciones`}>
          {lessons.map(item => (
            <CardLesson key={item.id} trainingId={unit.trainingId} unitId={unit.id} lesson={item} />
          ))}
        </Box>
      </Layout>
    </>
  );
}

export default UnitPage;
