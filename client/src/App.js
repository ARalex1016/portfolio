// Components
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Certificates from "./Components/Certificates/Certificates";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
// import Contact2 from "./Components/Contact2/Contact2";

// Material ui (MUI)
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider>
        <Header />
        <Banner />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        {/* <Contact2 /> */}
      </SnackbarProvider>
    </>
  );
}

export default App;
