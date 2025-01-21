import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import CombinedProvider from "./context/CombinedProvider";
import { Toaster } from "@/components/ui/toaster"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5*60 * 1000, // 5 minutes
      gcTime: 10*60 * 1000,  // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CombinedProvider>
        <BrowserRouter>
          <Layout />
          <Toaster />
        </BrowserRouter>
      </CombinedProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
