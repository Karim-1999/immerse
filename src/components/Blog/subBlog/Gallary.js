
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogSection = ({ blogs, user, handleDelete }) => {
  const [items, setItems] = useState([]);

  const filterItem = (categItem) => {
    const updatedItems = blogs.filter((item2) => {
      return item2.category === categItem;
    });

    setItems(updatedItems);
  };

  useEffect(() => {
  //  setItems([...blogs])
  },[] )
  
  useEffect(() => {
    setItems([...blogs])

  }, blogs);
  return (
    <>
      <div className="filter">
        <div className="heading5">Filter Contents</div>
        <div className="cont">
          <div className="box" onClick={() => filterItem("LEARNING") }>
            LEARNING
          </div>
          <div className="box" onClick={() => filterItem("COMPANY")}>
            COMPANY
          </div>
          <div className="box" onClick={() => filterItem("PRODUCT")}>
            PRODUCT
          </div>
          <div className="box" onClick={() => filterItem("RESEARCH")}>
            RESEARCH
          </div>
        </div>

        <div
          className="filter-reset-link pointer"
          onClick={() => setItems([...blogs])}
        >
          Reset Filters
        </div>
      </div>
    <div className="container">
      <div className="container-card">
        {items.map((item) => {
          const { id, title, urlImg,  category } = item;

          return (
            <>
              <div className="cardblog" key={id}>
                <div className="pointer">
                <Link to={`/detail/${id}`}>
                  <div className="imageshadow">
                    <img src={urlImg} alt="" />
                  </div>
                  <div className="divText">
                    <div className="title">{title}</div>
                    <div className="subtitle">
                      <div className="research">{category}</div>
                      
                        <p className="data dim">author: {item.author}</p> -&nbsp;
                        <span className="dim">{item.timestamp.toDate().toDateString()}</span>
                     
                    </div>
                    </div>
                    </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>      
    </div>

    </>
  );
};

export default BlogSection;
