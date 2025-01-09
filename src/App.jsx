import ScrollToTop from "./components/scroll/ScrollToTop ";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
