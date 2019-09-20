import React, { useState, useEffect } from "react";

import Layout from "../containers/Layout/Layout";
import Loader from "../components/common/Loader/Loader";
import Box from "../components/common/Box/Box";
import CardTraining from "../components/cards/CardTraining/CardTraining";

import trainingService from "../services/trainingService";

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const trainingsData = await trainingService.getData("trainings");
      setTrainings(trainingsData);
    }
    fetchData();
  }, []);
  return (
    <>
      <Loader show={!trainings.length} />
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
