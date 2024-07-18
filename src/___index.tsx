import { Route, Routes, Navigate } from 'expo-router';
import Layout from './_layout';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import CreateStory from './CreateStory';
import StoryDetail from './StoryDetail';
import StoryPage from './StoryPage';

// Simula la verificación de sesión del usuario
const isUserLoggedIn = () => {
  // Aquí deberías implementar la lógica para verificar si el usuario está logueado
  return false;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Rutas de autenticación */}
        <Route
          index
          element={isUserLoggedIn() ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Rutas de la aplicación */}
        <Route path="home" element={isUserLoggedIn() ? <Home /> : <Navigate to="/login" />} />
        <Route path="create-story" element={isUserLoggedIn() ? <CreateStory /> : <Navigate to="/login" />} />
        <Route path="story-detail/:id" element={isUserLoggedIn() ? <StoryDetail /> : <Navigate to="/login" />} />
        <Route path="story-page/:id" element={isUserLoggedIn() ? <StoryPage /> : <Navigate to="/login" />} />
      </Route>
    </Routes>
  );
}