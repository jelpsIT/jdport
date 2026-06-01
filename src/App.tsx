import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { Home } from '@/pages/Home';
import { VoidPage } from './pages/VoidPage';
import { SkillsPage } from './pages/SkillsPage';
import { IdentityPage } from './pages/IdentityPage';
import { LoginPage } from './pages/LoginPage';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { AdminPage } from './pages/AdminPage';
import { Hero } from '@/components/Hero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Homepage with full cinematic Hero (full width) */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Home />
              </>
            } 
          />
          <Route path="/login" element={<LoginPage />} />

          {/* Public Tools Area */}
          <Route path="/tools" element={<VoidPage />} />
          <Route path="/void" element={<VoidPage />} />

          {/* Secure Admin Area */}
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminPage />
              </RequireAuth>
            }
          />

          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/identity" element={<IdentityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;