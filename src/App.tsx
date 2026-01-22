import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.page";
import Header from "./components/primary/Header.component";
import Prac from "./pages/Prac";
import Components from "./pages/Components.page";
import Projects from "./pages/Projects.page";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className="
        [background:fixed_repeating-linear-gradient(135deg,#f5f5f5,#f5f5f5_1px,transparent_1px,transparent_10px),#fafafa]
        dark:[background:fixed_repeating-linear-gradient(135deg,#262626,#262626_1px,transparent_1px,transparent_10px),#171717]
      ">
        {/*<div className="absolute top-0 left-0 inset-0 border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto -z-1"></div>*/}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/prac" element={<Prac />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
