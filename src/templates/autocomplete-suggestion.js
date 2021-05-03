const autocompleteSuggestionTemplate = hit => {
  // console.log(hit.brand);
  return `<div class="suggestion">${hit._highlightResult.name.value}</div>`
};

export default autocompleteSuggestionTemplate;