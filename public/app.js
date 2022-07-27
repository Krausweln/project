import swiper from "swiper/bundle";
import "swiper/css/bundle";

const elSwiper = document.querySelector(".mySwiper");

const swiper = new Swiper(elSwiper, {
  effect: "cards",
});
