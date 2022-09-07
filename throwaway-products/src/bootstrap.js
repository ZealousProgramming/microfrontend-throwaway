import faker from "faker";

const mount = (htmlElement) => {
	let products = "";

	for (let i = 0; i < 5; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}

	htmlElement.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
	const element = document.querySelector("#dev-products");

	if (element) {
		mount(element);
	}
}

export { mount };
