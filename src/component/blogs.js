import { useEffect, useState } from "react";
import Header from "./header";

export default function BlogApp() {
  const [Blogs, setBlogs] = useState([
    {
      name: "John",
      title: "We need more women founders on offense",
      description:
        "A response to Glossy from Glossier’s former comms lead .A look into how recommendation algorithms are used to help readers find the right recipes for themselves.",
      date: "Nov 25,2023",
      category: "Startup",
      Image:
        "https://miro.medium.com/v2/resize:fill:200:134/1*YheTnxk9qlkfaMexgsKfqg.png",
    },
    {
      name: "Amy Widdowson",
      title: "The tyranny of consistency",
      description:
        "A response to Glossy from Glossier’s former comms lead.A look into how recommendation algorithms are used to help readers find the right recipes for themselves.",
      date: "Nov 18,2023",
      category: "UX",
      Image:
        "https://miro.medium.com/v2/resize:fill:200:134/0*5hJgvT1vt6PZRMd3",
    },
    {
      name: "Tomicca",
      title: "Our Departed on the Day of the Dead",
      description:
        "Without getting into just how much Día de Muertos or Day of the Dead in Mexico.A look into how recommendation algorithms are used to help readers find the right recipes for themselves.",
      date: "Nov 15,2023",
      category: "Day of the dead",
      Image:
        "https://miro.medium.com/v2/resize:fill:200:134/1*heiMaUXUdDG_qZyr-hq0wA.jpeg",
    },
    {
      name: "Meredith Rodriguez",
      title: "Earworms and Anhedonia",
      description:
        " Musings on a musical haunting .A look into how recommendation algorithms are used to help readers find the right recipes for themselves.",
      date: "Nov 5,2023",
      category: "Music",
      Image:
        "https://miro.medium.com/v2/resize:fill:200:134/1*IraA41cyapCYG2vMH2Tvxw.png",
    },
    {
      name: "Jonathan Lethem",
      title: "A Few Personal Aphorisms on Work",
      description:
        " If you have the opportunity to make the life of a colleague easier, make sure you do so. It’s called work.A look into how recommendation algorithms are used to help readers find the right recipes for themselves.",
      date: "Sep 5,2023",
      category: "Music",
      Image:
        "https://miro.medium.com/v2/resize:fill:200:134/0*ukd_ECs8LvyiuTG_",
    },
    {
      name: "Kaki Okumura",
      title: "Finding optimism when life’s problems feel impossible",
      description:
        " What I’ve learned from Japanese values of responsibility.A look into how recommendation algorithms are used to help readers find the right recipes for themselves.",
      date: "Sep 15,2022",
      category: "UX",
      Image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*WvMhIS1NZjopR0FfJ_Xp_Q.png",
    },
    {
      name: "Stephanie Dorsay Rondeau",
      title:
        "How to Find the Perfect Halloween Costume for Your Kids in 25 Easy Steps",
      description:
        " What I’ve learned from Japanese values of responsibility.A look into how recommendation algorithms are used to help readers find the right recipes for themselves.",
      date: "Sep 15,2022",
      category: "Humor",
      Image:
        "https://miro.medium.com/v2/resize:fill:200:134/1*10Ro4EhTLboLXvnYNVOS9g.jpeg",
    },
  ]);
  const [filteredBlogs, setFilteredBlogs] = useState([...Blogs]);
  const [popup, setPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  // const [array, setArray] = useState([]);

  const handlePopup = () => {
    setPopup(!popup);
  };

  function handleSubmit(){
    setFilteredBlogs([...Blogs, {title : title , name : name, date : date , category : category,Image: Image, description : description}] );
    setPopup(false);
    console.log(filteredBlogs);

  };

  function handleBlogs(category) {
    const filteredItem = Blogs.filter((item) => item.category === category);
    setFilteredBlogs(filteredItem);
  }
  
  return (
    <>
    <Header />
      <div className="container">
        <div className="blogs_main_box">
          <div className="blogs_left">
            {filteredBlogs.map((dataItem, key) => {
              return (
                <div className="blogs_container">
                  <div className="blogs_items">
                    <>
                      <h5>{dataItem.name}</h5>
                      <h3>{dataItem.title}</h3>
                      <p className="blog_description">{dataItem.description}</p>
                    </>
                    <div className="blog_category">
                      <p>{dataItem.date}</p>
                      <button className="blog_button">
                        {dataItem.category}
                      </button>
                    </div>
                  </div>
                  <div className="blogs_items blog_items_right">
                    <img
                      src={dataItem.Image}
                      alt=""
                      height="200px"
                      width="250px"
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="blogs_right">
            <button
              className="filter_button"
              onClick={() => handleBlogs("Startup")}
            >
              Startup
            </button>
            <button className="filter_button" onClick={() => handleBlogs("UX")}>
              UX
            </button>
            <button
              className="filter_button"
              onClick={() => handleBlogs("Music")}
            >
              Music
            </button>
            <button
              className="filter_button"
              onClick={() => handleBlogs("Day of the dead")}
            >
              Day of the dead
            </button>
            <button
              className="filter_button"
              onClick={() => handleBlogs("Humor")}
            >
              Humor
            </button>
            <button className="filter_button" onClick={handlePopup}>
              Add Blogs
            </button>
            {popup && (
              <div className="popup">
                <div className="overlay"></div>
                <div className="popup-content">
                  <div className="form_label_input">
                    <label> Title</label>
                    <input
                      className="blog_form_input title_input"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    ></input>
                  </div>
                  <div className="form_label_input2">
                    <div className="form_label_input ">
                      <label> Name</label>
                      <input
                        className="blog_form_input title_input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                    <div className="form_label_input">
                      <label> Date</label>
                      <input
                        className="blog_form_input title_input"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="form_label_input2">
                    <div className="form_label_input ">
                      <label>Category</label>
                      <input
                        className="blog_form_input title_input"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      ></input>
                    </div>
                    <div className="form_label_input">
                      <label>Image URL</label>
                      <input
                        className="blog_form_input title_input"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="form_label_input  label_desc">
                    <label>Description</label>
                    <textarea
                      className="blog_form_des"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="submit_button_div">
                    <button className="submit_form" onClick={() => handleSubmit()}>Submit</button>
                  </div>
                  <button className="close_popup" onClick={handlePopup}>
                    CLOSE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
