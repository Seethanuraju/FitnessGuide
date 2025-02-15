import React, { useEffect, useState } from 'react';
import style from '../styles/Fitness.module.css';

function Fitness() {
  const [exercise, setExercise] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'API_KEY', 
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        }
      );
      const data = await response.json();
      setExercise(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className={style.main}>
        <marquee className={style.main_1}>
          FitnessGuide || Getting fit is all about mind over matter.
        </marquee>
        <div className={style.head}>
          <img src='../boy.jpg' width='250px' height='100px' alt="Boy" />
          <h1 className={style.head_1}>
            The hardest thing about exercise is to start doing it. Once you are doing exercise regularly, the hardest thing is to stop it.
          </h1>
          <img src='../girl.webp' width='250px' height='100px' alt="Girl" />
        </div>
        <br />
        <h2>Workout Exercises</h2>
        <br />
        <div className={style.contain}>
          {exercise.length > 0 ? (
            exercise.map((item, index) => (
              <div key={index} className={style.card}>
                <img src={item.gifUrl} alt="Exercise" width='100px' height='200px' />
                <h3>{item.name}</h3>
                <p>Target: {item.target}</p>
                <p>Equipment: {item.equipment}</p>
              </div>
            ))
          ) : (
            <p>Loading the data...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Fitness;
