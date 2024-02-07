

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and alias it as Router

import ListView from "./Screens/ListView";
import CardView from "./Screens/CardView"
import OpenQueue from './Screens/OpenQueue';

function App() {
  return (
    <Router> {/* Wrap your Routes with a Router component */}
      <Routes>
        <Route path='/listview' element={<ListView />} /> {/* Use element prop to render the component */}
        <Route path='/cardview' element={<CardView />} />
        <Route path='/open-queue' element={<OpenQueue />} />
      </Routes>
    </Router>
  );
}

export default App;
