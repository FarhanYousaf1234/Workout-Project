import React from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutscontext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // If the response is successful (status code 200), dispatch the delete action
      dispatch({ type: 'DELETE_WORKOUT', payload: workout._id });
    }
  };
  if (!workout) {
    // Return null or a loading indicator if workout data is not available
    return null;
  }

  return (
    <div className='workout-details'>
      <h2>{workout.title}</h2>
      <p>Load: {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <span onClick={handleClick}>DELETE</span>
    </div>
  );
};

export default WorkoutDetails;
