import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signUp';
import MyPage from './pages/MyPage';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="font-Jua">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
};

export default App;
