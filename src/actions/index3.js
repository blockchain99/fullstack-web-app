import axios from 'axios';
import { FETCH_USER } from './types';
// const fetchUser = () => {
//   axios.get('/api/current_user');
// };
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    // dispatch({ type: FETCH_USER, payload: res });
    dispatch({ type: FETCH_USER, payload: res.data });
  };

// export const handleToken =( token ) => async dispatch => {
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data});
};

// export const submitSurvey = values => {
//   return { type: 'submit_survey' }; //just not to crash redux
// };
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
