import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
function App() {
  // Bem class naming convention
  return (
    <div className="app">
      <Router>
        <Header/>
        <div className='app__page'>
          <Sidebar />
            <main>
              <Routes> 
                <Route exact path="/" element={<RecommendedVideos />} />
                <Route path="/search/:searched" element={<SearchPage />}/>
              </Routes>
            </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
