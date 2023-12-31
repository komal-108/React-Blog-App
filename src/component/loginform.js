import { useState } from "react";
import BlogApp from "./blogs";
import { useNavigate} from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [visible , setVisible] = useState(false);
  function handlePassword(){  
    setVisible(!visible);
  }
  const navigate = useNavigate();

  const navigateBlogs = () => {
    navigate('/blogs');
  };
 
  return (
    <div className="login_box">
      <div className="login_container">
        <h1>Welcome</h1>
        <div className="form_input">
          <label className="label">Email or Phone </label>
          <div className="input_field">
          <input className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          </div>
        </div>
        <div className="form_input">
          <label className="label">Password </label>
          <div className="input_field">
            <input className="input"
              type={visible ? "text" : "password"}
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="show_icon_button" onClick={handlePassword}>{visible ? <img src="/images/eye.png" alt="" width="20" height="20"></img> : <img src="/images/hide.png" alt="" width="20" height="20"></img>}
           </button>
          </div>
        </div>
        <>
          <a href="/" className="forgot_pass">
            Forgot Password?
          </a>
          <br></br>
        </>
        <>
          <button className="login_button" onClick={navigateBlogs}>
            Login
          </button>
          
        {/* <Routes>
          <Route path="/blog-app" element={<BlogApp />} />
        </Routes> */}
        </>
      </div>
    </div>
  );
}
