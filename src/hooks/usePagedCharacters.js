import { useInfiniteQuery } from "react-query";
import axios from 'axios';
import { BASE_URL, PAGED_CHARACTERS } from '../API/constants';

const getPagedCharacters = async({ pageParam = 0 }) => {
    const url = `${BASE_URL}${PAGED_CHARACTERS}${pageParam}`;
    const response = await axios.get(url);

    if (typeof response.data === 'string') {
        throw new Error('Error in getCharacters');
    }

    return { data: response.data, nextId: pageParam + 12 };
}

export default function usePagedCharacters() {
    return useInfiniteQuery(["pagedCharacters"], getPagedCharacters, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.data.length < 12) {
                return undefined;
            }
            return lastPage.nextId
        },
        staleTime: 300000
    });
}
  