import './App.css';
import Main from './components/Main.jsx';
import MyNavBar from './components/MyNavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
//import NotFound from './components/pages/NotFound';
import { UserContextProvider } from './components/contexts/UserContextProvider.jsx';
import Footer from './components/Footer.jsx';




function App() {
  return (
    <div>
        <UserContextProvider>
      <BrowserRouter>
      <div className='mainContainer'>
      <MyNavBar/>
      <Main/>
      <Footer/>
      </div>
      </BrowserRouter>
    </UserContextProvider>
    </div>
  );
}

export default App;
