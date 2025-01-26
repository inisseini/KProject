import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from "./TopPage/TopPage";
import Web3D from "./Web3D/Web3D";
import WoodenDesk from "./TopPage/pages/WoodenDesk";

const HomePage = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/Web3D" element={<Web3D />} />
            <Route path="*" element={<p className="errorURL fl">このページは存在しません</p>} />
          </Routes>
        </BrowserRouter>
      </div>

      <WoodenDesk />
    </>
  );
};

export default HomePage;
