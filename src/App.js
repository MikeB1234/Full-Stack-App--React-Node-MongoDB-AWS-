import './App.css';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div id='page-body' >
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/article/:name' element={<ArticlePage />} />
            <Route path='/article-list' element={<ArticleListPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router >
  )
}

export default App;
