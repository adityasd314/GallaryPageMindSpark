import CARDS from "./data.js";
import { Gallery, GalleryContainer, GalleryCard } from "./gallery.js";
// Gallery.fromCards(CARDS);
// onresize, onload = function () {
//     Gallery.fromCards(CARDS);
// }
addEventListener("resize", function (e) {
    console.log('resize :>> ', e);

    Gallery.empty()
    Gallery.fromCards(CARDS)
});
addEventListener("load", function (e) {
    console.log('load :>> ', e);

    Gallery.empty()

    Gallery.fromCards(CARDS)
});