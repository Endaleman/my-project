import React, { createContext, useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

const AuthContext = createContext();

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Home</h3>

      {user.isAuth ? (
        <p>Welcome back: {user.name}</p>
      ) : (
        <p>You are not logged in. Go to the login page to sign in.</p>
      )}
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>This is About Page</h1>
    </div>
  );
}

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Here is the personal info displayed from the context.</p>
    </div>
  );
}

function LoginPage() {
  const [name, setName] = useState("");
  const { user, Login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    Login(name);
    setName("");
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>

        <button type="submit" style={{ marginLeft: "10px" }}>
          Login
        </button>
      </form>

      {user.isAuth && <p>User is logged in</p>}
    </div>
  );
}

function Navbar() {
  const { user, Logout } = useContext(AuthContext);

  return (
    <header
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {!user.isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={Logout}>Logout</button>
      )}
    </header>
  );
}

export default function App() {
  const [user, setUser] = useState({
    name: "",
    isAuth: false,
  });

  function Login(name) {
    setUser({
      name,
      isAuth: true,
    });
  }

  function Logout() {
    setUser({
      name: "",
      isAuth: false,
    });
  }

  return (
    <AuthContext.Provider value={{ user, Login, Logout }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthContext.Provider>
  );
}