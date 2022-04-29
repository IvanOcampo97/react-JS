import NavBar from "./components/NavBar/NavBar";
import './App.css';
import traerProductos from "./components/ItemListContainer/ItemListContainer";
// import Counter from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
   
    <NavBar />
    <itemList  />
    {/* <Counter initial={0} stock={5} /> */}
    </div>
  );
}

export default App;
