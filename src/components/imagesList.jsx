import React, { useEffect } from "react";
import { ImageContext } from "../context/imageContext";
import Image from "./image";

const ImagesList = ({ topic }) => {
  const { images, searchTopic } = React.useContext(ImageContext);

  useEffect(() => {
    searchTopic(topic);
  }, [topic]);

  return (
    <div className="imageCard">
      {images.map((image) => {
        return <Image key={image.id} content={image} />;
      })}
    </div>
  );
};

export default ImagesList;
