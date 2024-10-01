import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "", role: "" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        🛒
      </Link>
      <div>
        <Link onClick={() => setIsOpen(false)} to={"/search"}>
          <FaSearch />
        </Link>
        <Link onClick={() => setIsOpen(false)} to={"/cart"}>
          <FaShoppingBag />
        </Link>

        {user?._id ? (
          <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
            </button>
            <dialog open={isOpen}>
              <div>
                {user.role === "admin" && (
                  <Link
                    to={"/admin/dashboard"}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Admin
                  </Link>
                )}

                <Link to={"/order"} onClick={() => setIsOpen((prev) => !prev)}>
                  Orders
                </Link>
                <button onClick={logoutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
              <FaSignInAlt /> Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
