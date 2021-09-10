import PropTypes from "prop-types";

export default function Button({ onFetchGallery }) {
  return (
    <button type="submit" className="Button" onClick={onFetchGallery}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onFetchGallery: PropTypes.func.isRequired,
};
