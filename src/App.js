import React from "react";
import './styles/fonts.css';
import './styles/App.css';
import Button from './components/shared/button/Button';
import Plan from "./components/shared/plan/Plan";
import Card from "./components/shared/plan/Card";

function App() {
  return (
    <div>
      {/* <Button className='btn btn--primary btn--block' /> */}
      {/* <Card cardClass='card card--primary' badgeClass='badge' /> */}
      <Plan />
    </div>
  );
}

export default App;