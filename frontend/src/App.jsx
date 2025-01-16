import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { SidebarProvider } from "./context/SidebarContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </SidebarProvider>
      {/* <ReactQueryDevtools  /> */}
    </QueryClientProvider>
  );
}

export default App;
