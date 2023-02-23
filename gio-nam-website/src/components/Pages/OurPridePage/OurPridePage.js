import React from "react";
import "./OurPridePage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import Header from "../../PageSections/Header/Header";
import Footer from "../../PageSections/Footer/Footer";
import arcturus_1 from "../../../assets/arcturus-1.JPG";
import arcturus_2 from "../../../assets/arcturus-2.JPG";
import artemis_1 from "../../../assets/artemis-1.jpg";
import artemis_2 from "../../../assets/artemis-2.jpg";
import blossom_1 from "../../../assets/blossom-1.JPG";
import blossom_2 from "../../../assets/blossom-2.JPG";

export default function OurPridePage() {

  const lions = [
    {
      name: "Arcturus",
      content: [arcturus_1, arcturus_2],
    },
    {
      name: "Artemis",
      content: [artemis_1, artemis_2],
    },
    {
      name: "Blossom",
      content: [blossom_1, blossom_2],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="ourpride-container gio-nam-font">
        <div className="ourpride-hero-banner">
          <h1>Our Pride</h1>
        </div>
        <div className="ourpride-content-container">
          <div style={{ width: "55%" }}>
            <p>
              All of our lions are handmade by craftsmen from around the world
              using bamboo, rattan, and papier-mache. Please feel free to
              request any specific lions that fit your color scheme or
              preference. Or, if you aren't sure, let us know and we will be
              happy to consult with you and offer suggestions!
            </p>
            <div className="ourpride-lion-container">
              {lions.map((lion) => (
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  slidesPerView={1}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                >
                  {lion.content.map((picture) => (
                    <SwiperSlide>
                      <img src={picture} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
