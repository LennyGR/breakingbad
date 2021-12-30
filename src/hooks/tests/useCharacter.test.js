import { QueryClient, QueryClientProvider } from 'react-query';
import useCharacter from '../useCharacter';
import { renderHook } from '@testing-library/react-hooks';

describe('getCharacter', () => {
    test('gets content', async() => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }) => (<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>);

    const { result, waitFor } = renderHook(() => useCharacter(1), { wrapper });
    await waitFor(() => result.current.isSuccess, { timeout: 15000 });
    expect(result.current.data).toHaveLength(1);
    });

    test('gets no content', async() => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }) => (<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>);

    const { result, waitFor } = renderHook(() => useCharacter(999), { wrapper });
    await waitFor(() => result.current.isSuccess, { timeout: 15000 });
    expect(result.current.data).toHaveLength(0);
    });
});