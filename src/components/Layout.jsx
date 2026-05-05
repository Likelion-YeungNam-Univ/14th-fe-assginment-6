// src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Layout() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white p-4 shadow-sm border-b border-gray-200">
        <ul className="flex justify-center gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">🏠 HOME</Link>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <Link to="/mypage" className="hover:text-blue-500 transition">마이페이지</Link>
              </li>
              <li>
                <button 
                  onClick={logout} 
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  로그아웃
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      
      <main className="p-8 max-w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;