import Menu from "./Components/Menu"
import {Routes,Route} from "react-router-dom"
import DetalleMision from "./Components/DetalleMision"
import ListaMisiones from "./Components/ListaMisiones"

const App=()=> {
  return (
    <>
    <Menu />
    <Routes>
        <Route path="/" element={<ListaMisiones/>}></Route>
        <Route path="/Detalle/:id" element={<DetalleMision />}></Route>
    </Routes>

   </>
  );
}

export default App;
