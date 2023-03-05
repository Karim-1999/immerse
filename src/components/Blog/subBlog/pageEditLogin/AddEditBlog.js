import React, { useState, useEffect } from "react";
//import ReactTagInput from "@pathofdev/react-tag-input";
//import "@pathofdev/react-tag-input/build/index.css";
import { db, storage } from "../firebase";
import "./addEditPost.css";
import { useNavigate, useParams } from "react-router-dom";
//import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
//import {  addDoc, collection, getDoc, serverTimestamp, doc, updateDoc, } from "firebase/firestore";
import { toast } from "react-toastify";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const initialState = {
  title: "",
  tags: [],
  trending: "no",
  category: "",
  description: "",
  urlImg: "",
};

const categoryOption = ["LEARNING", "COMPANY", "PRODUCT", "RESEARCH"];

const AddEditBlog = ({ user, setActive }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [editorState, setEditorState] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const { title, tags, category, trending, description, urlImg } = form;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to firebase successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
    setActive(null);
  };

  const handleEditorChange = (e) => {
    setEditorState(e);
    // console.log([e.target.value])
    setForm({ ...form, description: draftToHtml(convertToRaw(editorState.getCurrentContent())) })
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    console.log(form)
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && title && description && urlImg) {
      if (!id) {
        try {
          await addDoc(collection(db, "blogs"), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog created successfully");
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await updateDoc(doc(db, "blogs", id), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog updated successfully");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return toast.error("All fields are mandatory to fill");
    }

    navigate("/blog");
  };

  return (
    <div className="wrapper  wr3">
      <div className="container3">
        <div className="col-12" style={{ marginBottom: "20px" }}>
          <h1 className="text-center heading py-2">
            {id ? "Update Blog" : "Create Blog"}
          </h1>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row blog-form" onSubmit={handleSubmit}>
              <div className="blog-inputs">
                <div className="col-12 py-3">
                  <input
                    type="text"
                    className="form-control input-text-box"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                  />
                </div>
                <div className="selectCategory">
                  <select
                    value={category}
                    onChange={onCategoryChange}
                    className="catg-dropdown"
                  >
                    <option>Please select category</option>
                    {categoryOption.map((option, index) => (
                      <option value={option || ""} key={index}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="">
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleEditorChange}

                  /*  placeholder="Description"
                  
                  name="description"
                  onChange={handleChange} */
                />
              </div>
              <div className="col-12 py-3">
                <input
                  className="form-control description-box"
                  placeholder="Metti URL dell'immagine"
                  value={urlImg}
                  name="urlImg"
                  onChange={handleChange}
                />
              </div>
              {/*    <div className="mb-3">
                <input
                  style={{ paddingBottom: "35px" }}
                  type="file"
                  className="form-control"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div> */}
              <div className="col-12 py-3 text-center">
                <button
                  className="btn-sign-up button-trial card-btn"
                  type="submit"
                  disabled={progress !== null && progress < 100}
                >
                  {id ? "Update" : "Submit"}
                </button>

                {/*   <div className="contEmbed">
                  <iframe
                    src="https://onlinehtmleditor.dev/"
                    title="editor text to html language"
                  ></iframe>
                 
                </div> <br/>
                <br />
                <div className="contEmbed">
                  <iframe
                    src="https://i-converter.com/files/jpg-to-url"
                    title="convert image to code"
                  ></iframe>
                 
                </div> */}
                <div></div>

                <br />
                <br />
                <br />
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditBlog;
