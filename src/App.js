import React, { useRef } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useQuizContext } from "./QuizContext";
import 'react-circular-progressbar/dist/styles.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { QueryForm } from "./QueryForm";
import { Review } from "./Review";
import { Result } from "./Result";
import { StartTest } from "./StartTest";
import { Home } from "./Home";
import {Quiz} from "./Quiz";


function App() {
  const { nullAll} = useQuizContext();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_moxgqtq', 'template_np1v8al', form.current, 'wF4Gyz4A063dC8Ozz')
    .then((result) => {
      console.log(result.text);
      e.target.reset();
      toast.success("Query sent successfully");
  }, (error) => {
      console.log(error.text);
      toast.error(error.text);
  });

    }
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <h2>QuizLand</h2>
          <Link to="/" className="nav-link" onClick={()=>nullAll()}>Home</Link>
        </div>
        <Routes>
            <Route path="/queryform" element={<QueryForm />} />
            <Route path="/review" element={<Review />} />
            <Route path="/result" element={<Result />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/start-test" element={<StartTest />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Toaster position="bottom-right" />
            <form className="footer" ref={form} onSubmit={sendEmail}>
              <h2>Contact Form</h2>
              <div className="form">
                <div className="inputs">
                  <label htmlFor="user_name">
                    Name<input name="user_name" required />
                  </label>
                  <label htmlFor="user_email">
                    Email<input name="user_email" required />
                  </label>
                </div>
                <label htmlFor="message">Query<textarea name="message" required /></label>
              </div>
              
                <input type="submit" value="Send" className="btn" />
              
            </form>
      </div>
    </Router>
  );
}

export default App;
