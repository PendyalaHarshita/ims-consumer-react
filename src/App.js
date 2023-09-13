import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

import Login from './components/Login';
import Registration from './components/Registration';
import Product from './components/Product';
/*To use the Font-awesome, install all given packages from npm into your app.

npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome

 * And import the library for the font-awesome

*/
/*
	React Router is a standard library for routing in React. 
	It enables the navigation among views of various components in a React Application, 
  allows changing the browser URL, and keeps the UI in sync with the URL. 

	React Router is a JavaScript framework that lets us handle client and server-side 
  routing in React applications. 
  It enables the creation of single-page web or mobile apps that allow navigating without 
  refreshing the page. 
  It also allows us to use browser history features while preserving the right application
   view.

   Used Version6 of Router

 > npm install react-router-dom --save
*/

import {library} from '@fortawesome/fontawesome-svg-core';
import { faSignIn,faCameraRetro } from '@fortawesome/free-solid-svg-icons';
library.add(faSignIn,faCameraRetro);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Inventory Mangement System</h1>
      </header>
      <section>
        <div style = {{
          backgroundImage:"url(/images/bg.jpg)",
          minHeight:'140vh',minwidth:'100vh'
        }}>
          <Router>
            <NavBar/>{/* Render Nav Bar Component */}
            <Routes>
              <Route path = '/register' element={<Registration/>}></Route>
              <Route path = '/login' element={<Login/>}></Route>

              <Route path = '/product' element = {<Product/>}></Route>
            </Routes>
          </Router>
        </div>
      </section>
      <footer className='footer'>
        <p>&copy; All rights reserved to Wells Fargo</p>
      </footer>
    </div>
  );
}

export default App;
