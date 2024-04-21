import { useEffect, useState } from "react";

import "./App.css";

interface IBlog {
  id: number;
  title: string;
}

function App() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>all blogs alalallala</h1>
        {blogs &&
          blogs.map((blog: { id: number; title: string }) => (
            <div key={blog.id}>{blog.title}</div>
          ))}
      </header>
    </div>
  );
}
export default App;
