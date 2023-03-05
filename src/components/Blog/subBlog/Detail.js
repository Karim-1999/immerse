import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./details.css";
import "../../../assets/css/mainstyle.css";

import { db } from "./firebase";
import { Navbar } from "../../Utilities/Navbar/Navbar";
import { toast } from "react-toastify";
import { LastFooter } from "../../Utilities/Footer/SubFooter/Footer";

const Detail = ({ setActive, user, setUser }) => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogsData = async () => {
      const blogRef = collection(db, "blogs");
      const blogs = await getDocs(blogRef);
      setBlogs(blogs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getBlogsData();
  }, []);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    setActive(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  //const userId = user?.uid;
  return (
    <div className="wrapper wrapper12">
      <Navbar />
      <div className="container"></div>

      <div className="container">
        {" "}
        <div className="single">
          <h1 className="container-title2">{blog?.title}</h1>
          <div className="contImg">
            <img src={blog?.urlImg} alt={blog?.title} />
          </div>

          <div className="overlay"></div>
          <div className="blog-title"></div>
        </div>
      </div>

      <div className="container">
        {" "}
        <div className="conLine">
          <div className="glowing-line-component">
            <div className="glow"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-fluid pb-4 pt-4 padding blog-single-content">
            <div className="row row-text-wrapper mx-0">
              <p
                className="text-start"
                dangerouslySetInnerHTML={{ __html: blog?.description }}
              >
                {}
              </p>
              <div className="textCont">
                <span className="meta-info">
                  By <p className="author">{blog?.author}</p> -&nbsp;
                  {blog?.timestamp.toDate().toDateString()}
                </span>

                <div style={{ float: "right" }}>
                  <button className="blog-btn" 
                    name="trash"
                    style={{ margin: "15px", cursor: "pointer" }}
                    size="2x"
                    onClick={() => handleDelete(id)}
                  >
                    {" "}
                    Delete
                  </button>
                  <Link to={`/update/${id}`}>
                    <button className="blog-btn" name="edit" style={{ cursor: "pointer" }} size="2x">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>

      <LastFooter />
    </div>
  );
};

export default Detail;
