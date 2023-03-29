import './App.scss';
import Header from './components/Header';
import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import Trending from "./components/Sidebar/SidebarComponents/Trending"
import History from "./components/Sidebar/SidebarComponents/History"
import Subscription from "./components/Sidebar/SidebarComponents/Subscription"
import Library from "./components/Sidebar/SidebarComponents/Library"
import Yourvideos from "./components/Sidebar/SidebarComponents/Yourvideos"
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
                <Route exact path="/trending" element={<Trending />} />
                <Route exact path="/history" element={<History />} />
                <Route exact path="/subscription" element={<Subscription />} />
                <Route exact path="/yourvideos" element={<Yourvideos />} />
                <Route exact path="/library" element={<Library />} />
                <Route path="/search/:searched" element={<SearchPage />}/>
              </Routes>
            </main>
        </div>
      </Router>
    </div>
  );
}

export default App;