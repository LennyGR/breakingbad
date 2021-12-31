import { QueryClient, QueryClientProvider } from 'react-query';
import usePagedCharacters from '../usePagedCharacters';
import { renderHook } from '@testing-library/react-hooks';

describe('getCharacters', () => {
    test('gets content', async() => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }) => (<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>);

    const { result, waitFor } = renderHook(() => usePagedCharacters(), { wrapper });
    await waitFor(() => result.current.isSuccess, { timeout: 15000 });
    const { pages } = result.current.data;
    expect(pages).not.toHaveLength(0);
    });
});