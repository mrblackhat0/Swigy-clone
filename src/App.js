import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import OnlineDelivery from './components/OnlineDelivery';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Restaurant />
      <OnlineDelivery/>
    </>
  );
}

export default App;
