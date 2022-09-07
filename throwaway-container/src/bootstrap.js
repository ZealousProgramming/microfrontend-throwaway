import { mount as mountProduct } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("container");

mountProduct(document.querySelector("#products-display"));
mountCart(document.querySelector("#cart-display"));
