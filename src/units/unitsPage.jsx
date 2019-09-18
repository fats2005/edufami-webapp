import React, { useState, useEffect } from "react";
import Loader from "../components/common/Loader/Loader";
import Box from "../components/common/Box/Box";
import CardLesson from "../components/cards/CardLesson/CardLesson";

import trainingService from "../services/trainingService";
import Layout from "../containers/Layout/Layout";

function UnitPage({ match }) {
  const [lessons, setLessons] = useState([]);
  const [unit, setUnit] = useState({});

  useEffect(() => {
    const { unitId } = match.params;
    async function fetchData() {
      const unitRespone = await trainingService.getUnit(unitId);
      const lessonsResponse = await trainingService.getLessonsByUnit(unitId);
      setUnit(unitRespone);
      setLessons(lessonsResponse);
    }
    fetchData();
  }, [match.params]);

  return (
    <>
      <Loader show={!lessons.length} />
      <Layout>
        <Box label={`${unit.name} / Lecciones`}>
          <div className="row">
            {lessons.map(item => (
              <CardLesson
                key={item.id}
                trainingId={unit.trainingId}
                unitId={unit.id}
                lesson={item}
              />
            ))}
          </div>
        </Box>
      </Layout>
    </>
  );
}

export default UnitPage;
