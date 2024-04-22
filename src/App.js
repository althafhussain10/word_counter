import './App.css';
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { JokePage } from "./pages/JokePage";
import { PageNotFound } from "./pages/PageNotFound";


function App() {
  return (
      <>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="joke" element={<JokePage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <div class="footer-created">
          <p>Designed and Developed by</p>
          <h4>Mohamed Althaf Hussain N</h4>
        </div>
      </>
  );
}

export default App;
