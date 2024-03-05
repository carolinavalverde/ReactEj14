import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import FormularioReceta from "./components/pages/receta/FormularioReceta";
import DetalleReceta from "./components/pages/DetalleReceta";
import Recetas from "./components/pages/Recetas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>;
        <Route
           path="/detallereceta/:id" element={<DetalleReceta />}
        ></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={
            <FormularioReceta
              editando={false}
              titulo="Agregue una Nueva Receta"
            ></FormularioReceta>
          }
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id"
          element={
            <FormularioReceta
              editando={true}
              titulo="Edite la Receta"
            ></FormularioReceta>
          }
        ></Route>
        <Route path="/recetas" element={<Recetas></Recetas>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>;
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
