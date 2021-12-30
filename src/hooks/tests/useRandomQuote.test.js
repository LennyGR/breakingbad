import { QueryClient, QueryClientProvider } from 'react-query';
import { useRandomQuoteTest } from '../useRandomQuote';
import { renderHook } from '@testing-library/react-hooks';

describe('randomQuote', () => {
    test('gets quote', async() => {
        const queryClient = new QueryClient({

        });
        const wrapper = ({ children }) => (<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>);

    const name = "Walter White";
    const { result, waitFor } = renderHook(() => useRandomQuoteTest(name), { wrapper });
    await waitFor(() => {
        return result.current.isSuccess
    }, { timeout: 15000 });
    expect(result.current.data).toHaveLength(1);
    });

    test('gets no quote', async() => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }) => (<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>);

    
    const { result, waitFor } = renderHook(() => useRandomQuoteTest("Jane Margolis"), { wrapper });
    await waitFor(() => result.current.isSuccess, { timeout: 15000 });
    expect(result.current.data).toHaveLength(0);
    });
});