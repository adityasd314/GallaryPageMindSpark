import CARDS from "./data.js";

// Create your instance

import { Gallery, GalleryContainer, GalleryCard } from "./gallery.js";
// Gallery.fromCards(CARDS);
// onresize, onload = function () {
//     Gallery.fromCards(CARDS);
// }
addEventListener("resize", function (e) {

    Gallery.empty()
    Gallery.fromCards(CARDS)
});
addEventListener("load", function (e) {

    Gallery.empty()

    Gallery.fromCards(CARDS)
});