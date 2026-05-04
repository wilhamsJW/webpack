import Title from './components/title';
import Image from './components/image';
import Button from './components/button';

const TitleAux = new Title();

TitleAux.create("Primeira página");

const ImageAux = new Image();

ImageAux.insertBobImage();

const ButtonAux = new Button()

ButtonAux.create()

// Babel Spread
const obj = {a: 1, b: 2, c: 3, d: 4, e: 99};

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);