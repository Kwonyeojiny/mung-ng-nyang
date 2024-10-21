import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";

const App = () => {
  

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {/* 페이지들 여기에 담아줄거임???*/}
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
