import Love from '../img/Love.jpg';

class Image {
    insertBobImage() {
        const img = document.createElement('img')

        img.src = Love
        img.width = 200;

        document.querySelector('body').appendChild(img)
    }
}

export default Image;