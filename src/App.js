import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './css-files/App.css'
import './css-files/Footer.css'
import jwt_decode from 'jwt-decode'
import NewPost from './components/pages/new-post/NewPost'
import PostDetails from './components/pages/PostDetails'

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
    <Router>
      <header>
        <Navbar 
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

      <footer>
        <Footer />
      </footer>

    </Router>
  );
}

export default App;
