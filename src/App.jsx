import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Content from "./Content";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path=":username" element={<Content/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;