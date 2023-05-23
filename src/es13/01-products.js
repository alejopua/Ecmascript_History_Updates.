import fetch from "node-fetch";

const responde = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await responde.json();

export { products };
