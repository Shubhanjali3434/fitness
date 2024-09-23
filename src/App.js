
import React, { useState } from 'react';
import './App.css';

function App() {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise && duration) {
      setWorkouts([...workouts, { exercise, duration }]);
      setExercise('');
      setDuration('');
    }
  };

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <button type="submit">Add Workout</button>
      </form>

      <h2>Workout Log</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - {workout.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
