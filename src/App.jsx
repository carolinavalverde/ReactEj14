import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>;
        <Route
          path="/detalleproducto"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          path="/administrador/crear"
          element={<FormularioProducto></FormularioProducto>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>;
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
