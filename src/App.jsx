import React from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Exploremenu from "./components/Exploremenu";
import Topselling from "./components/topselling_alltime/Topselling";
import Alltime from "./components/topselling_alltime/Alltime";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="image_slider">
          <ImageSlider
            images={[
              "https://assets.kfc.com.np/storage/uploads/images/banner/64c0ae1382bff.webp",
              "https://assets.kfc.com.np/storage/uploads/images/banner/645e265ff3b8f.webp",
              "https://assets.kfc.com.np/storage/uploads/images/banner/65a3949803a27.webp",
            ]}
          />
        </section>
        <section className=" explore_menu">
          <Exploremenu />
        </section>
        <section className="topselling_alltime bg-[#f7f8fc] w-full">
          <Topselling />
          <Alltime />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
