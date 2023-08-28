import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./components/Posts/index.tsx";
import { Post } from "./components/Post/index.tsx";
import { Menu } from "./components/Menu/index.tsx";
import { Home } from "./components/Home/index.tsx";
import { About } from "./components/About/index.tsx";
import { NotFound } from "./components/NotFound/index.tsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
