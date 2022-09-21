import React, {Component} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Edit from './Components/Edit';
import Add from './Components/Add';

 class App extends Component {
  render() {
    return (
      <div>
      <Details>
        <BrowserRouter>
         <Routes>
         <Route path="/" element={<Navbar/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/student" element={<Student/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/edit" element={<Edit/>}/>
         <Route path="/add" element={<Add/>}/>
         </Routes>
        </BrowserRouter>
        </Details>
          
      </div>
    )
  }
}

export default App;
