const cards = document.querySelectorAll('.mushroom-guide .card');

const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');
const noResultsMessage = document.querySelector('.no-matches');

const currentFilters = {
  season: 'all',
  edible: 'all',
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `card-${mushroomId}`;
});

seasonalFilter.addEventListener('change', updateFilter);
edibleFilter.addEventListener('change', updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;
  if (!document.startViewTransition()) {
    filtercards();
    return;
  }
  document.startViewTransition(() => filtercards());
}

function filtercards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    // grabs the data with in season or edible
    const season = card.querySelector('[data-season]').dataset.season;
    const edible = card.querySelector('[data-edible]').dataset.edible;

    const matchesSeason = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;
    if (
      (currentFilters.season === 'all' || matchesSeason) &&
      (currentFilters.edible === 'all' || matchesEdible)
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    if (hasVisibleCards) {
      noResultsMessage.hidden = true;
    } else {
      noResultsMessage.hidden = false;
    }
  });
}
