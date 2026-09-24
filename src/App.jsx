import "./App.css";
import Profile from "./components/Profile.jsx";
import EntryList from "./components/EntryList.jsx";
import EntryPage from "./components/EntryPage.jsx";
import ValuationPage from "./components/ValuationPage.jsx";
import { profile } from "./data/profile.js";
import { articles } from "./data/articles.js";
import { posts } from "./data/posts.js";
import { valuations } from "./data/valuations.js";
import { matchRoute } from "./routes.js";

export default function App({ pathname }) {
  const route = matchRoute(pathname);
  const entry = route?.type === "entry" ? route.entry : null;

  return (
    <div className="page">
      <Profile {...profile} valuations={valuations} />
      {route?.type === "valuation" ? (
        <ValuationPage {...route.entry} />
      ) : entry ? (
        <EntryPage
          sectionLabel={route.kind === "article" ? "Article" : "Post"}
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
