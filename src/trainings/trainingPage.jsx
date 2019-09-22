import React, { useState, useEffect } from "react";

import Layout from "../common/layout";
import Loader from "../common/loader";
import Box from "../common/box";
import CardUnit from "../common/cardUnit";

import trainingService from "../services/trainingService";

const TrainingPage = props => {
  const [training, setTraining] = useState({});
  const [units, setUnits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await trainingService.getData("units");
      await trainingService.getData("lessons");
      const id = props.match.params.trainingId;
      setTraining(trainingService.getTraining(id));
      setUnits(await trainingService.getUnitsByTraining(id));
    }

    fetchData();
  });
  return (
    <>
      <Loader show={!units.length} />
      <Layout>
        <Box label={`${training.name} / Unidades`}>
          {units.map(item => (
            <CardUnit
              key={item.id}
              unit={item}
              numberOfLessons={trainingService.getNumberOfLessonsByUnit(item.id)}
            />
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default TrainingPage;
