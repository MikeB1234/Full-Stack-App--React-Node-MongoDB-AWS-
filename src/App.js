import './App.css';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div id='page-body' >
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/article/:name' element={<ArticlePage />} />
            <Route exact path='/article-list' element={<ArticleListPage />} />
          </Routes>
        </div>
      </div>
    </Router >
  )
}

export default App;
