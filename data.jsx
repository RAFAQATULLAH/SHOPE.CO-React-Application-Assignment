import Img1 from "./src/assets/img1.png";
import Img2 from "./src/assets/img2.png";
import Img3 from "./src/assets/img3.png";
import imgjeans from "./src/assets/Geans.png"
import Chekered from "./src/assets/Chekered.png"
import Sleeve from "./src/assets/Sleeve.png"


const items = [
    {
        id: 1,
        name: "T-shirt with Tape Details",

        images: {
            img1: Img1,
            img2: Img2,
            img3: Img3
        },

        rating: 4.5,
        price: 120
    },

    {
        id: 2,
        name: "Skinny Fit Jeans",

        images: {
            img1: imgjeans,
            img2: Img2,
            img3: Img3
        },

        rating: 3.5,
        price: 240,
        originalPrice: 260,
        discount: 20
    },

    {
        id: 3,
        name: "Checkered Shirt",

        images: {
            img1: Chekered,
            img2: Img2,
            img3: Img3
        },

        rating: 4.5,
        price: 180
    },

    {
        id: 4,
        name: "Sleeve Striped T-shirt",

        images: {
            img1: Sleeve,
            img2: Img2,
            img3: Img3
        },

        rating: 4.5,
        price: 130,
        originalPrice: 160,
        discount: 30
    }
];

export default items;