import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const logout = () => {
    setUser(null);
  };

  return (
    <nav className="p-4 bg-stone-100 flex gap-4 justify-between">
      <Link to="/" className="font-bold">HOME</Link>
      {user && (
        <>
          <div className="flex gap-4">
            <Link to="/mypage" className="font-bold">MYPAGE</Link>
            <button onClick={logout} className="font-bold">LOGOUT</button>
          </div>
        </>
      )}
    </nav>
  );
};
export default Navbar;