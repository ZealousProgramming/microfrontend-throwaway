import faker from "faker";

const mount = (htmlElement) => {
	const cartTest = `<div>You have ${faker.random.number()} item(s) in your cart</div>`;

	htmlElement.innerHTML = cartTest;
};

if (process.env.NODE_ENV === "development") {
	const element = document.querySelector("#dev-cart");

	if (element) {
		mount(element);
	}
}

export { mount };
