import React from "react";
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h2>Check the weather in your city</h2>
        <input
          type="text"
          placeholder="Enter city name"
          style={{
            padding: "10px",
            width: "250px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
