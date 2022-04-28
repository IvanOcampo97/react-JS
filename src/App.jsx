import NavBar from "./components/NavBar/NavBar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Counter from "./components/ItemCount/ItemCount";
import Counter from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
   
    <NavBar />
    <ItemListContainer  />
    <Counter initial={0} stock={5} />
    </div>
  );
}

export default App;
