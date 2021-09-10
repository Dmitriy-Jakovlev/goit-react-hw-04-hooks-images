import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";
import Loader from "./Loader";
import Buton from "./Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function ImageGallery({ gallery, onFetchGallery, isLoader }) {
  const [largeImg, setLargeImg] = useState("");
  const [alt, setAlt] = useState("");
  const [showModals, setShowModals] = useState(false);

  const toggleModal = () => {
    setShowModals((prev) => !prev);
  };

  const toggleModalImg = (gallery) => {
    setLargeImg(gallery.largeImageURL);
    setAlt(gallery.tags);
    toggleModal();
  };

  return (
    <div className="ImageBlock">
      <ul className="ImageGallery">
        <ImageGalleryItem gallerys={gallery} toggleModalImg={toggleModalImg} />
      </ul>
      {isLoader && <Loader />}
      {gallery.length > 0 && !isLoader && (
        <Buton onFetchGallery={onFetchGallery} />
      )}
      {showModals && (
        <Modal srcImgs={largeImg} tags={alt} onClose={toggleModal} />
      )}
    </div>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onFetchGallery: PropTypes.func.isRequired,
  isLoader: PropTypes.bool.isRequired,
};
