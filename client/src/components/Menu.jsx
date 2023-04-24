import React from "react";

const Menu = () => {
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
    <div className="menu">
      <h1>Other creations you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
