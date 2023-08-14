/**
 *
 * @param {*} param0
 * @returns
 */
const template = ({ id, producto, precio, descripcion, imagen }) =>
  `<div class="card" style="width: 18rem;">
				<img class="prodc" src="${imagen}" alt="${producto}">
				<div class="card-body">
					<p class="card-text">${descripcion}</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item" id="0">$ ${precio}</li>
				</ul>
				<div class="card-body d-flex justify-content-center">
					<button onclick="removeToCart(${id})" class="btn btn-danger mx-2">Quitar</button>
					<button onclick="addToCart(${id})" class="btn btn-success mx-2">Agregar</button>
				</div>
			</div>`;

const mostrarProductos = () => {
  const container = document.querySelector("#productsContainer");
  const result = prods.map((prod) => template(prod));
  container.innerHTML = result.join("");
};
