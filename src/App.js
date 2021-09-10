import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ApiGallery from "./components/APIGallery";
import ImageGallery from "./components/ImageGallery";

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGallery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const FormSubmitHandler = (query) => {
    setGallery([]);
    setSearchQuery(query);
    setPage(1);
    setError(error);
  };

  const fetchGallery = () => {
    setIsLoader(!isLoader);
    ApiGallery(searchQuery, page)
      .then((hits) => {
        setGallery((prev) => [...prev, ...hits]);
        setPage((prev) => prev + 1);
      })
      .then(() => {
        if (page > 1)
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoader((prev) => !prev));
  };

  return (
    <>
      <Searchbar onSubmit={FormSubmitHandler} />
      <ImageGallery
        gallery={gallery}
        onFetchGallery={fetchGallery}
        isLoader={isLoader}
      />
    </>
  );
}
