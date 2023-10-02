import React from "react";
import {PiShare} from 'react-icons/pi';
// import { AiOutlineHeart } from "react-icons/ai";
// import { BiShare } from "react-icons/bi";
// import { FiBookmark } from "react-icons/fi";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.jpg";
import img6 from "../assets/img-6.jpg";
import img7 from "../assets/img-7.jpg";
import img8 from "../assets/img-8.jpg";
import img9 from "../assets/img-9.jpg";
import img10 from "../assets/img-10.jpg";
import img11 from "../assets/img-11.jpg";
import img12 from "../assets/img-12.jpg";
import pro1 from "../assets/pro_1.jpg";
import pro2 from "../assets/pro_2.jpg";
import pro3 from "../assets/pro_3.jpg";
import pro4 from "../assets/pro_4.jpg";
import pro5 from "../assets/pro_5.jpg";

const Post = () => {
  const postObj = [
    {
      authorProfile: pro1,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img1,
      title:
        "Change These 12 iOS 17 Settings Right Now For a Superior Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      authorProfile: pro2,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img2,
      title: "title here",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      authorProfile: pro3,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img3,
      title:
        "Change These 12 iOS 17 Settings Right Now For a Superior Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      authorProfile: pro4,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img4,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro5,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img5,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro1,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img6,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro2,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img7,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro3,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img8,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro4,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img9,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro5,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img10,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro1,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img11,
      title: "title here",
      description: "description here for the blog",
    },
    {
      authorProfile: pro2,
      authorName: "John Wick",
      authorProffesion: "Designer",
      image: img12,
      title: "title here",
      description: "description here for the blog",
    },
  ];

  return (
    <>
      {postObj.map((items, index) => (
        <div key={index} className="image-box">
          <img src={items.image} alt="img.jpg" />
          <div className="overlay post-details">
            <div className="post-header">
              <h3>{items.title}</h3>
              <div
                className="cta-icon">
                  <p>Read</p>
                  <PiShare/>
                {/* <AiOutlineHeart />
                <BiShare />
                <FiBookmark /> */}
              </div>
            </div>
            <div className="post-body">
              <div className="category">{items.description}</div>
            </div>
            <div className="post-footer">
              <div style={{ width: "30px", height: "30px" }}>
                <img
                  style={{ borderRadius: "50%", width: "100%" }}
                  src={items.authorProfile}
                  alt="authorProfile"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h6>{items.authorName}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
