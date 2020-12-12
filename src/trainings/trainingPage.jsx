import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FETCH_TRAINING_REQUEST } from "./trainingsActions";

import Layout from "../common/layout";
import Loader from "../common/loader";
import Box from "../common/box";
import CardUnit from "../common/cardUnit";

const TrainingPage = ({ match }) => {
  const { training, units, fetching } = useSelector((state) => state.trainings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_TRAINING_REQUEST, id: match.params.trainingId });
  }, [dispatch, match.params.trainingId]);
  return (
    <>
      <Loader show={fetching} />
      <Layout>
        <Box label={`${training.name} / Unidades`}>
          {units.map((item) => (
            <CardUnit key={item.id} unit={item} />
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default TrainingPage;
