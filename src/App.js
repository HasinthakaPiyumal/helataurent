import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About'
import Foods from './components/foods/Foods'
import Gallery from './components/gallery/Gallery'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Ex from './components/extentions/Ex'
import AboutFull from './components/about/AboutFull'
import Order from './components/order/Order'
import Checkout from './components/checkout/Checkout'
import Cart from './components/cart/Cart'
import Sign from './components/sign/Sign'
import Account from './components/account/Account'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">


        <Switch>

            <Route exact path="/">
                <Ex/>
                <Header/>
                <Home/> 
                <About/>
                <Foods/>
                <Gallery/>
                <Menu/>
                <Footer/>           
            </Route>

{/* ===================== SIGN ======================= */}
            <Route exact path="/sign">
                <Sign/>
            </Route>
{/* ==================== Account ======================= */}
            <Route exact path="/account">
                <Ex/>
                <Header/>
                <Account/>
                <Footer/>
            </Route>

{/* ===================== ORDER ===================== */}
            <Route exact path="/order">
                <Ex/>
                <Header/>
                <Order/>
                <Footer/>
            </Route>

{/* =========================== ITEM BUY ===================== */}
            <Route exact path="/buy">
                <Ex/>
                <Header/>
                <Checkout/>
                <Footer/>
            </Route>

{/* ==========================   CART   ======================== */}
            <Route exact path="/cart">
                <Ex/>
                <Header/>
                <Cart/>
                <Footer/>
            </Route>

{/* ==========================   ABOUT  ======================== */}
            <Route path="/about">
                <Ex/>
                <Header/>
                <AboutFull/>
                <Footer/>
            </Route>
          
            <Route path="">
                <Ex/>
                <Header/>
                404
                <Footer/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
