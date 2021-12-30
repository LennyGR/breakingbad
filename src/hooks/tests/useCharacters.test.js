import { QueryClient, QueryClientProvider } from 'react-query';
import useCharacters from '../useCharacters';
import { renderHook } from '@testing-library/react-hooks';

describe('getCharacters', () => {
    test('gets content', async() => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }) => (<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>);

    const { result, waitFor } = renderHook(() => useCharacters(), { wrapper });
    await waitFor(() => result.current.isSuccess, { timeout: 15000 });
    expect(result.current.data).toHaveLength(62);
    });
});