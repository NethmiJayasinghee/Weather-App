import React from "react";
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h2 className="topic">Check the weather in your city</h2>
        <input type="text"placeholder="Enter city name" />
        <h2>Check the weather in your city</h2>
        <input type="text" placeholder="Enter city name" />
        <button>Search</button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
