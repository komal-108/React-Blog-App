import BlogApp from './component/blogs';
// import LoginForm from './component/loginform'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='blogs' element = {<BlogApp/>}/>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;