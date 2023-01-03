import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Main from "./page/mainPage/Main";
import GenerationListPage from "./page/generation_page/GenerationListPage";
import PokemonDetailPage from "./page/pokemon_detail_page/PokemonDetailPage";
import HomePage from "./page/homePage/HomePage";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./component/modal/Modal";
import DetailCard from "./component/card/DetailCard";

function App() {
  const modal = useSelector((state) => state.user.openSingleModal);
  console.log("modalis", modal);
  return (
    <Router>
      {modal && (
        <Modal>
          <DetailCard />
        </Modal>
      )}
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/generation-page" element={<GenerationListPage />} />
          <Route path="/pokemon-detail-page" element={<PokemonDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
