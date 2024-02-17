import Image from "next/image";
import React, { useState } from "react";

const images = [
  { id: 1, src: "https://via.placeholder.com/500x500?text=UYUYUYUYU+1" },
  { id: 2, src: "https://via.placeholder.com/500x500?text=CCSCS+2" },
  { id: 3, src: "https://via.placeholder.com/500x500?text=AAAAAA+3" },
];

//TODO: Сделать просмотр фотографии на весь экран. Сейчас реализован показ модалки по нажатию одной из картинок
//Необходимо красиво вывести все картинки + сделать стиль модалки
const FullGallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onImageClick = (id) => {
    setCurrentImage(id);
    // s
    setShowModal(true);
  };

  const onNextClick = () => {
    const currentIndex = images?.findIndex((img) => img.id === currentImage);
    if (currentIndex < images.length - 1) {
      setCurrentImage(images[currentIndex + 1].id);
    } else {
      setCurrentImage(images[0].id);
    }
  };

  const onCloseClick = () => {
    setCurrentImage(null);
    setShowModal(false);
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          onClick={() => onImageClick(image.id)}
        />
      ))}
      {showModal && (
        <div className="modal">
          <Image
            src={images?.find((img) => img.id === currentImage).src}
            alt={`Image ${currentImage}`}
          />
          <div className="modal-buttons">
            <button onClick={onCloseClick}>Close</button>
            <button onClick={onNextClick}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullGallery;
