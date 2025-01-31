import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import store from "./redux/store";

import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import PostJob from './pages/PostJob'
// import JobDetails from './pages/JobDetails'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Login from './pages/Login';
// import { Provider } from 'react-redux';
// import Register from './pages/Register'
// import Navbar from '../../components/Navbar'
// import store from './redux/store'; // Ensure you provide a Redux store

function App() {
  return (
    <div style={{display:'flex', width:'100%'}}>
      <div className='home-section' style={{ margin: '0 auto', width: '50%' }}>
        <Home />
      </div>
      <div className='main-section' style={{width:'50%'}}>
        <JobDetails />
        {/* <Login/> */}
        <PostJob />
      </div>

    </div>
    // <Provider > {/* Ensure you pass the store here */}
    //   <Router>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="*" element={<h1>Not Found</h1>} />
    //     </Routes>
    //   </Router>
    // </Provider>
  )
}

export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './pages/Home'
// import JobDetails from './pages/JobDetails'
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

// export default App
