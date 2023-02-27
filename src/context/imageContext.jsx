import React, { useState, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast("there is a problem with fetching and parsing data", {
          position: "bottom-right",
          type: "error",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        toast(
          "please check your network connection and make sure your vpn is connected!",
          {
            position: "bottom-right",
            type: "default",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
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
