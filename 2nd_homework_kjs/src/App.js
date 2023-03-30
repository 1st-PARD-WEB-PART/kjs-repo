import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import Login from './Login';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />/*layout으로 싸져있는 상태에서 index = 제일 첫번째 뜨는 화면*/} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Route>
    <Route path="/articles" element={<Articles />}>
      <Route path=":id" element={<Article />} />
    </Route>
    <Route path="*" element={<NotFound />/*정의하지 않은 경로 이외의 경로가 입력 되었을 때 404 페이지로 가도록 설정*/} />
  </Routes>

  );
};

export default App;