import HelloWorld from "./helloWorld";
import Counter from "./counter";
import ShoppingList from "./form";
import Home from "./home";
import Profile from "./profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CounterView } from "./features/Counter/counterView";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
          <nav style={{ marginBottom: "10px" }}>
            <Link to="/" style={{ marginRight: "10px" }}>
              Home
            </Link>
            <Link to="/profile" style={{ marginRight: "10px" }}>
              Profile
            </Link>
            <Link to="/demo" style={{ marginRight: "10px" }}>
              Demo
            </Link>
            <Link to="/Redux" style={{ marginRight: "10px" }}>
              Redux
            </Link>
          </nav>
          <Routes>
            {/* Define routes for Home and Profile components */}
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/demo"
              element={
                <div style={{ padding: "20px" }}>
                  <HelloWorld />
                  <HelloWorld name="Marley" />
                  <Counter />
                  <ShoppingList />
                </div>
              }
            />
            <Route path="/Redux" element={<CounterView />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
