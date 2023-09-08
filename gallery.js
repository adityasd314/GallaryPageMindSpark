import Render from "./render.js";
const _ = (e) => document.querySelector(e);
"".substring()
class Gallery {
    static config = {
        cardsPerContainer: 4
    }
    static fromCards(cards) {
        const { cardsPerContainer } = Gallery.config;
        const galleryContainer = [];
        let tempCards = []
        cards.forEach((card, i) => {
            tempCards.push((new GalleryCard(card.src)));
            if ((i + 1) % cardsPerContainer == 0) {
                galleryContainer.push(new GalleryContainer(...tempCards));
                tempCards = [];
            }
            debugger

        });

        galleryContainer.forEach((container) => {
            container.addToGallery();
        })
    }
    static classes = {
        parent: "app__gallery",
        container: "gallery__container",
        card: "gallery__image-card"
    }
    constructor(parent = _("." + Gallery.classes.parent)) {

        this.parent = parent;
    }
    addContainer(galleryContainer) {
        const { parent } = this;
        debugger
        parent.append(galleryContainer);
    }

}

class GalleryContainer extends Gallery {
    static classes = {
        "parent": "app__gallery",

    }
    constructor(...galleryCards) {
        super()
        this.cards = galleryCards;
    }
    get element() {
        const { cards } = this;
        const elm = Render.component("div", { className: Gallery.classes.container });
        cards.forEach((x) => {
            elm.append(x.card)
        });
        return elm;

    }
    addToGallery() {
        const { element } = this;
        this.addContainer(element);
    }
}
class GalleryCard extends GalleryContainer {
    constructor(src, cardData = {
        // src: "",alt:"" //Any Image Attributes
    }) {
        super();
        const div = Render.component("div", { className: Gallery.classes.card })
        const element = Render.component("img", { src: src, ...cardData });
        div.append(element)
        this.card = div;
    }


}
export { _, Gallery, GalleryContainer, GalleryCard };