import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Error404 from "./components/Error404";
import ContactPage from "./pages/ContactPage";

function App() {
  // Le hash est lu directement depuis l'URL, y compris au chargement initial.
  const [page, setPage] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  let pageActuelle;
  switch (page) {
    case "#home":
      pageActuelle = <Features />;
      break;
    case "#contact":
      pageActuelle = <ContactPage />;
      break;
    default:
      pageActuelle = <Error404 />;
      break;
  }

  return (
    <>
      <Navbar />
      <main>{pageActuelle}</main>
    </>
  );
}

export default App;
