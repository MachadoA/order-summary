import './App.css';
import Attribution from './components/attribution/Attribution.jsx'
import Information from './components/information/Information.jsx'
import Ordersummary from './components/orderSummary/Ordersummary';
import Button from './components/button/Button';

function App() {
  return (
    <>
      <div className="container">
        <Ordersummary />
        <Information />
        <Button />
      </div>
        <Attribution />

    </>
  );
}

export default App;
