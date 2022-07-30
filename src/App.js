import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import ExerciseDetails from '../src/pages/ExerciseDetails';
import Practice from '../src/pages/Practice';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import { Box } from '@mui/system';

const App = () => {
  return (
    <Box width='400px' m='auto' sx={{ width: { xl: '1488px' } }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
};

export default App;
