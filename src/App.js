
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Function to get a random quote
  const getQuote = () => {
    const quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
      { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
      { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
      { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
  };

  // Load one quote on startup
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote-box">
        <h2>"{quote}"</h2>
        <p>- {author}</p>
        <div className="buttons">
          <button onClick={getQuote}>New Quote</button>
          <a
            href={'https://x.com/intent/tweet?text="${quote}" - ${author}'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Tweet</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;