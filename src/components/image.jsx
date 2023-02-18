import React from "react";

import { URL } from "../api/config";
const Image = ({ content }) => {
  return (
    <div className="image">
      <img
        alt="photos"
        src={`${URL}/${content.server}/${content.id}_${content.secret}_m.jpg`}
      />
    </div>
  );
};

export default Image;
