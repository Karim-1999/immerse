import React, { useState, useEffect } from "react";
//import Gallary from './subBlog/Gallary'
import Section from "./subBlog/Section";
import "../../assets/css/mainstyle.css";
import "../../assets/css/variabili.css";
import "./blog.css";
import { Navbar } from "../Utilities/Navbar/Navbar";
import { LastFooter } from "../Utilities/Footer/SubFooter/Footer";
import BlogSection from "./subBlog/Gallary";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { db } from "./subBlog/firebase";
import Detail from "./subBlog/Detail";



const Blog = ({ setActive, user }) => {
  const [blogs, setBlogs] = useState([]);
  /*  const [tags, setTags] = useState([]); */
  /*  const [trendBlogs, setTrendBlogs] = useState([]); */

  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    /*  setTrendBlogs(trendBlogs); */
  };

  useEffect(() => {
    getTrendingBlogs();
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        /*  const uniqueTags = [...new Set(tags)]; */
        /*  setTags(uniqueTags); */
        setBlogs(list);

        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getTrendingBlogs();
    };
  }, [setActive]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        await deleteDoc(doc(db, "blogs", id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {/* <Trending blogs={trendBlogs} /> */}

      <div className="wrapper blogWrapper">
        <Navbar />
        <Section />
     {/*  <Filter blogs={blogs} /> */}
         {blogs.length > 0 && <BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />} 
        

        <LastFooter />
        {/* <Detail blogs={blogs} user={user} handleDelete={handleDelete} />  */}
       
      </div>
      {/*  <div className="col-md-3">
            <Tags tags={tags} />
            <MostPopular blogs={blogs} />
          </div> */}
      
    </>
  );
};

export default Blog;

/*

const Blog = () => {
    return (
      <>
         <div className="wrapper">
        <Navbar/>
        <Section />
        <BlogSection />
        <LastFooter />
        </div>
        
    </>
  )
}

export default Blog*/
