import axios from 'axios';

import { ADD_VISIT_PROFILE, SET_QUOTABLES } from "./contants";
import { BASE_URL, QUOTES } from '../../API/constants';

export const addVisitProfile = (charId) => ({ type: ADD_VISIT_PROFILE, charId: charId });
export const setQuotables = (quotables) => ({ type: SET_QUOTABLES, quotables: quotables });

export const getQuotables = () => {
    return async(dispatch) => {
        const url = `${BASE_URL}${QUOTES}`;
        const response = await axios.get(url);
        
        if (typeof response.data === 'string') {
            throw new Error('Error in getQuotes');
        }

        const names = response.data.reduce((acc, item) => {
            acc[item.author] = acc[item.author]? acc[item.author] + 1 : 1
            return acc;
        },{});

        dispatch(setQuotables(names));
    }
}