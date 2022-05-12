import NavBar from "./components/NavBar/NavBar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
    
    <NavBar />
    <Routes>
      <Route path='/' element={ <ItemListContainer />} />
      {/* <Route path='/cart' element={<Cart />}/> */}
      <Route path='/category/:categoryId' element={ <ItemListContainer />} />
      <Route path='/item/:id' element={ <ItemDetailContainer />} />
    </Routes>
   
    

    </div>
  );
}

export default App;
