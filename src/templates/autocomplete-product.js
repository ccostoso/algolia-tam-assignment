const autocompleteProduct = hit => {
console.log(hit);
console.log(`hit._hightlightResult: ${hit._highlightResult}`);
return (`<div class="autocomplete-product">
  <div class="autocomplete-product__image-container">
    <img class="autocomplete-product__image" src="${hit.image}" />
  </div>
  <div class="autocomplete-product__details">
    <h3 class="autocomplete-product__name">${
      hit._highlightResult.name.value
    }</h3>
    <p class="autocomplete-product__price">$${hit.price}</p>
  </div>
</div>`)};

export default autocompleteProduct;
