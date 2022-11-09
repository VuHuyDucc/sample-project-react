import React from "react";
import Hero from "./hero/Hero";
import Show from "./show/Show";
import ShowList from "./show/ShowList";

const Home = () => {
  return (
    <div className="bg-gray-50 py-3">
      <Hero />
      <Show title="Danh mục mới nhất" viewMoreLink="categories">
        <ShowList></ShowList>
      </Show>
    </div>
  );
};

export default Home;
