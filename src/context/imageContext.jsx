import React, { useState, createContext } from "react";
import axios from "axios";

import { api_Key } from "./../api/config";

export const ImageContext = createContext({ images: [] });

const ImageContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const searchTopic = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_Key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        console.log(response);
      })

      .catch((error) => {
        console.log(
          " there is a problem with fetching and parsing data",
          error
        );
      });
  };

  return (
    <ImageContext.Provider value={{ images, searchTopic }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
