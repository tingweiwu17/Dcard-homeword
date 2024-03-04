import { Routes, Route } from "react-router-dom";
import LogPage from "./views/LogPage/LogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogPage />} />
      </Routes>
    </>
  );
}

export default App;
