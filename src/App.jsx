import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routers/index.js';
import MainLayout from './layouts/main-layout/MainLayout.jsx';
import './styles/global-styles/GlobalStyles.module.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {
              routes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} element={route.element} />
                );
              })
            }
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
