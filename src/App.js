import BlogApp from './component/blogs';
import LoginForm from './component/loginform'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginForm />} /> */}
          <Route path='blogs' element = {<BlogApp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;