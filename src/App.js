import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
//import components/pages
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Home from './components/pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import NewPost from './components/pages/new-post/NewPost'
import PostDetails from './components/pages/PostDetails'

//import Css files 
import './css-files/index.css'
import './css-files/App.css'
import './css-files/Footer.css'
import './css-files/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // the currently logged in user will be stored up here in state
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect -- if the user navigates away form the page, we will log them back in
  useEffect(() => { 
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  // event handler to log the user out when needed
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
      // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)
    }
  }
    
  return (
    <body className='the-body d-flex flex-column min-vh-100 m-auto'>
      <Router>
      
      <header>
        <NavBar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </header>

      <div className="App">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />

          <Route 
            path="/register"
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          {/*optionally conditionally render auth locked routes */}
          {/* 
			<Route 
			   path="/profile" 
               element={currentUser ? <Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Navigate to="/login" />}
            /> 
		  */}

          <Route 
            path="/profile"
            element={<Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/new-post"
            element={<NewPost handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
          />

          <Route
          path="/post/:id"
          element={<PostDetails handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />
        </Routes> 

      </div>

      <footer className='mt-auto'>
        <Footer />
      </footer>

    </Router>
    </body>
    
  );
}

export default App;
