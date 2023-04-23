import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "lorem500",
      desc: "lorem500",
      img: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    },
    {
      id: 2,
      title: "lorem500",
      desc: "lorem500",
      img: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    },
    {
      id: 3,
      title: "lorem500",
      desc: "lorem500",
      img: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    },
    {
      id: 4,
      title: "lorem500",
      desc: "lorem500",
      img: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    },
    {
      id: 5,
      title: "lorem500",
      desc: "lorem500",
      img: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
