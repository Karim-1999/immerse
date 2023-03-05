import React from 'react'
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    onSnapshot,
    query,
    where,
  } from "firebase/firestore";
  import { useState, useEffect } from "react";
  import Spinner from "../components/Spinner";
  import { db } from "./firebase";
  import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import Detail from './Detail';
  




const Helpers = () => {

  


    const [active, setActive] = useState("home");
    const [user, setUser] = useState(null);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
    }, []);
  
    const handleLogout = () => {
      signOut(auth).then(() => {
        setUser(null);
        setActive("login");
        navigate("/auth");
      });
    };





    
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
   const [tags, setTags] = useState([]); 
   const [trendBlogs, setTrendBlogs] = useState([]); 

  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
     setTrendBlogs(trendBlogs); 
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
        const uniqueTags = [...new Set(tags)]; 
         setTags(uniqueTags); 
        setBlogs(list);
        setLoading(false);
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

  if (loading) {
    return <Spinner />;
  }




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


  return (
      <div>
          
          <Detail setActive={setActive} user={user} handleDelete={handleDelete}  blogs={blogs} /> 
          
    </div>
  )
}

export default Helpers