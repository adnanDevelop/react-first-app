import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import HomeRouter from "./components/HomeRouter";
import AboutRouter from "./components/AboutRouter";
import ServiceRouter from "./components/ServiceRouter";
import BlogRouter from "./components/BlogRouter";
import ContactRouter from "./components/ContactRouter";
import ErrorRouter from "./components/ErrorRouter";
import TodoList from "./components/TodoList";
import WeatherApp from "./components/Weather app/WeatherApp";
import UseReducer from "./components/UseReducer";
import Player from "./components/Player";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<HomeRouter />} />
            <Route path="/about" element={<AboutRouter />} />
            <Route path="/service" element={<ServiceRouter />} />
            <Route path="/blog" element={<BlogRouter />} />
            <Route path="/contact" element={<ContactRouter />} />
            <Route path="*" element={<ErrorRouter />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/reducer" element={<UseReducer/>} />
            <Route path="/player" element={<Player/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
