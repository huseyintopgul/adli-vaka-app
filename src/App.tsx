import YeniHastaKayit from './pages/form/yeni-kayit-page';
import { Route, Routes } from 'react-router-dom';
import HastaKayitlari from './pages/details/kayitli-hastalar';

function App() {
  return (
    <Routes>

      <Route path='/' element={<HastaKayitlari />} />
      <Route path='/yeni-hasta-kayit' element={<YeniHastaKayit />} />
    </Routes>
  );
}

export default App;
