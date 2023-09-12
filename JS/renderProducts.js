const productsContainer = document.querySelector("#products-container");

getProducts();

async function getProducts() {
  const response = await fetch("./js/products.json");
  const productsArray = await response.json();
  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHTML = `<div class="col-lg-6">
						<div class="card mb-4" data-id="${item.id}">
							<img style="max-height: 220px;" class="product-img" src="img/sportSuppl/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 style="min-height: 90px;" class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} buc.</small></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control items__control-minus" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control items__control-plus" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.weight}g.</div>
										<div class="price__currency">${item.price} Lei</div>
									</div>
								</div>

								<button data-cart type="button" class="shop__button">
								<span class="shop__button-span"> 
								Adaugă în coș
								<span/>
								</button>

							</div>
						</div>
					</div>`;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}
