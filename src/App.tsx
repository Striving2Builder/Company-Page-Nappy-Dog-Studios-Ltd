/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}
