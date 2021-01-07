import React from "react";
import Gallery from "./tools/gallery";
import Slide1 from "../../Image/slid1.jpg";
import Slide2 from "../../Image/slid2.jpg";
import Slide3 from "../../Image/slid3.jpg";

const GalleryPage = () => {
  return (
    <section
      className="gallery"
      id="gallery"
      style={{
        paddingBottom: "50px",
        marginBottom: "50px",
        height: "100%",
        width: "100vw",
      }}
    >
      <h2>קצת חוויות</h2>
      <div className="flex">
        <Gallery image={Slide3} />
        <Gallery image={Slide2} />
        <Gallery image={Slide1} />
        <Gallery image={Slide1} />
      </div>
    </section>
  );
};

export default GalleryPage;
