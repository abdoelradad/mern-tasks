import { UserPlus, LogIn, LogOut, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ProfileInfo from "./cards/ProfileInfo";

function Navbar() {
  const user = true;

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-white bg-opacity-90 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold text-indigo-600"
          >
            🤯 Tasks
          </Link>

          <ProfileInfo onLogout={onLogout} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
