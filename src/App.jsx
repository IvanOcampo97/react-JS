import NavBar from "./components/NavBar/NavBar";
import './App.css';
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
   
    <NavBar />
    {/* <ItemListContainer /> */}
    <ItemDetailContainer />

    </div>
  );
}

export default App;
