import { useQuery } from "react-query";
import axios from 'axios';
import { BASE_URL, CHARACTERS } from '../API/constants';

const getCharacters = async() => {
    const url = `${BASE_URL}${CHARACTERS}`;
    const response = await axios.get(url);

    if (typeof response.data === 'string') {
        throw new Error('Error in getCharacters');
    }

    return response.data;
}

export default function useCharacters() {
    return useQuery(["characters"], () => getCharacters(), {
        staleTime: 300000
    });
}
  
