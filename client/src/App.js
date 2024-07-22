import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import homepage from './pages/homepage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const theme = useMemo(()=>createTheme(themeSettings(),[]))
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<homepage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
