import axios from 'axios';
import { BASE_URL, RANDOM_QUOTE } from '../API/constants';
import { useQuery } from "react-query";

export const getRandomQuote = async(name) => {
    const url = `${BASE_URL}${RANDOM_QUOTE}${name.split(' ').join('+')}`;
    const response = await axios.get(url);

    if (typeof response.data === 'string') {
        throw new Error('Error in getRandomQuote');
    }

    return response.data;
}

export default function useRandomQuote(name) {
    return useQuery(["random", name], () => getRandomQuote(name), {
        enabled: false
    });
}

export function useRandomQuoteTest(name) {
    return useQuery(["random", name], () => getRandomQuote(name));
}