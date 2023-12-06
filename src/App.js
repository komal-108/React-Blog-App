import BlogApp from './component/blogs';
import Header from './component/header';
import LoginForm from './component/loginform'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    {/* <LoginForm/>   */}
    <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path='blogs' element = {<BlogApp/>}/>
        </Routes>
      </BrowserRouter>
    </>
    </>
  );
}

export default App;