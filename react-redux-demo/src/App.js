import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from "./components/IceCreamContainer"
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from "./components/UserContainer"
function App() {
  return (
    <div className="App">
    <ItemContainer cake/>
    <ItemContainer />
     <CakeContainer/>
     <IceCreamContainer/>
     <NewCakeContainer/>
     <UserContainer/>
    </div>
  );
}

export default App;
