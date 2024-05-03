import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import ContextWrapper from './context/ContextWrapper';
import Login from './components/LoginItems/Login';
import CartPage from './components/CartItem/CartPage';
import Home from './components/HomeItems/Home';
import CreateAccount from './components/LoginItems/CreateAccount';
import FruitsSing from './components/FruitItemsSinglepage/FruitsSing';
import ContentFruitsSing from './components/FruitItemsSinglepage/ContentFruitSing';
function App() {
  return (
    <ContextWrapper>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Header />}/> */}
            <Route path="/" element={<Home />} />
            <Route path="/FruitsSing" element={<ContentFruitsSing/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/CartPage" element={<CartPage/>}/>
          </Routes>
        </div>
      </Router>
    </ContextWrapper>
  );
}

export default App;
