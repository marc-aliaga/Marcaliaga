import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./components/Profile.jsx";
import EntryList from "./components/EntryList.jsx";
import EntryPage from "./components/EntryPage.jsx";
import { profile } from "./data/profile.js";
import { articles } from "./data/articles.js";
import { posts } from "./data/posts.js";

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const articleSlug = hash.match(/^#\/articles\/(.+)$/)?.[1];
  const postSlug = hash.match(/^#\/posts\/(.+)$/)?.[1];

  const article = articleSlug && articles.find((a) => a.slug === articleSlug);
  const post = postSlug && posts.find((p) => p.slug === postSlug);
  const entry = article || post;

  return (
    <div className="page">
      <Profile {...profile} />
      {entry ? (
        <EntryPage
          sectionLabel={article ? "Article" : "Post"}
          title={entry.title}
          date={entry.date}
          Body={entry.Body}
        />
      ) : (
        <main className="sections">
          <EntryList heading="Articles" items={articles} basePath="articles" />
          <EntryList heading="Posts" items={posts} basePath="posts" />
        </main>
      )}
    </div>
  );
}
