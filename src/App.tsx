import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout > <p>Home Page</p></Layout>} />
        <Route path="/Search" element={<Layout > <p>Search Page</p></Layout>} />
      </Routes>
    </Router>
  )
}

export default App