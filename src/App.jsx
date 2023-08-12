import { useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  const [searchTerm, setSeachTerm] = useState('');
  const handleNavbarSearch = (term) => {
    setSeachTerm(term);
  }

  return (
    <>
      {/* <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} /> */}
      <SignupForm />
    </>
  )
}

export default App
