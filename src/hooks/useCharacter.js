import { useQuery } from "react-query";
import axios from 'axios';
import { BASE_URL, CHARACTERS } from '../API/constants';

export const getCharacter = async(id) => {
    const url = `${BASE_URL}${CHARACTERS}/${id}`;
    const response = await axios.get(url);

    if (typeof response.data === 'string') {
        throw new Error('Error in getCharacter');
    }

    return response.data;
}

export default function useCharacter(id) {
    return useQuery(["character",id], () => getCharacter(id));
}