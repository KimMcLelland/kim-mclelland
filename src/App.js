import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return(
        <div className="start_page_buttons">
          <p>What do you want to know about me?</p>
          <button onClick={() => setPage(page+1)}>Education</button>
          <button onClick={() => setPage(page+2)}>Creativity</button>
          <button onClick={() => setPage(page+3)}>Spirituality</button>
          <button onClick={() => setPage(page+4)}>Gender and Sexuality</button>
        </div>
        )
    }
    if (page === 1) {
      return (
        <div className = "education_page">
        <p>I have the following qualifications:</p>
        <ul>
          <li>MA Multimedia Journalism</li>
          <li>BA History and Philosophy</li>
          <li>Coding Masters course with Code Nation</li>
          <li>BTec National Diploma Mutlimedia Design</li>
          <li>English Lit and General Studies A Levels</li>
          <li>Maths, Science, English, History, Music and French GCSEs</li>
        </ul>
        <p>Studying philosophy taught me logic and analytical thinking.  
          Studying Multimedia Journalism taught me html and css as well as 
          how to manipulate images and video.</p>
        <button onClick={() => setPage(page-1)}>back to main page</button>
        </div>
      )
    }
    if (page === 2) {
      return(
        <div className = "creativity_page">
          <p>These are my creative achievements</p>
          <button onClick={() => setPage(page-2)}>back to main page</button>
          </div>
      )
    }
    if (page === 3) {
      return(
        <div className = "spirituality_page">
          <p>A history of my spiritual beliefs</p>
          <button onClick={() => setPage(page-3)}>back to main page</button>
        </div>
      )
    }
    if (page === 4) {
      return (
        <div className = "lgbt_page">
          <p>I am trans, submissive, polyamorous and bisexual. So there!</p>
          <button onClick={() => setPage(page-4)}>back to main page</button>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <h1>Kim McLelland</h1>
      <div className="intro">
        <p>This is a promotional web app, showcasing my skills</p>
        <p>with JS React and also providing information about me.</p>
      </div>
      <div>
        {pageDisplay()}
      </div>
      <p className="footer">Bakcground image by <a href="https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jake Weirick</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
    </div>
  );
}

export default App;
