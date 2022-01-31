import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
