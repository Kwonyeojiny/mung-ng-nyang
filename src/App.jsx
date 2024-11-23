import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signUp';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
    </Routes>
  );
};

export default App;
