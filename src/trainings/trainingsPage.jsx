import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TRAININGS_FETCH_REQUEST } from "./trainingsActions";

import Layout from "../common/layout";
import Loader from "../common/loader";
import Box from "../common/box";
import CardTraining from "../components/cards/CardTraining/CardTraining";

const Trainings = () => {
  const { trainings, fetching } = useSelector(state => state.trainings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: TRAININGS_FETCH_REQUEST });
  }, [dispatch]);
  return (
    <>
      <Loader show={fetching} />
      <Layout>
        <Box label="Mis Capacitaciones" backgroundColor="#ffffff">
          <div className="row">
            {trainings.map(item => (
              <CardTraining key={item.id} data={item} />
            ))}
          </div>
        </Box>
      </Layout>
    </>
  );
};

export default Trainings;
