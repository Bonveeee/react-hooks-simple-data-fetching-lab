// create your App component here
import React from "react";
import { useState, useEffect } from "react";

const Api = " https://dog.ceo/api/breeds/image/random";
function App() {
  const [image, setimage] = useState(null);

  useEffect(() => {
    fetch = "Api".then((r) => r.json()).then((data) => setimage(data.image));
  }, []);

  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={image} alt="A Random Dog"></img>{" "}
    </div>
  );
}

export default App;
