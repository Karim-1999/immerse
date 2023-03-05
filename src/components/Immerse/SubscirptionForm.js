import { db } from "./subImmerse/firebaseimmerse";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useState } from "react";

export function SubscriptionForm() {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = async(e) => {
    e.preventDefault();

    // await setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });

      if (input) {
        try{
          const docRef = await addDoc(collection(db, "emails"), {
            email: input,
            Time: serverTimestamp(),
           });
           console.log('Documento scritto: ', docRef.id);
        }catch(e){
          console.log('ciao mamma', e);
        }
      }
     setInput("");
  };
  return (
    <div className="container">
      <div className="email">
        <div className="email-text">
          <h4>
            Don't miss out! Sign up to get the latest on new updates and more.
          </h4>
        </div>
        <form onSubmit={submitHandler} className="email-form">
          <input
            type="email"
            placeholder="Email Address"
            value={input}
            onChange={inputHandler}
          />
          <button type="submit" className="email-form-sub">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}
