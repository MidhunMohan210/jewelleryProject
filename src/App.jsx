import { Header } from "./components/layout/Header";
import { Banner } from "./components/banner/Banner";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";



function App() {
  return(
    <>
    <BrowserRouter>
    <Layout />;
    </BrowserRouter>
    
    
    </>

  )
}

export default App;
