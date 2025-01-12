import ScrollToTop from "./components/scroll/ScrollToTop ";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
// import './App.css'

function App() {
  return (
    <>
      <SidebarProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout />
        </BrowserRouter>
      </SidebarProvider>
    </>
  );
}

export default App;
