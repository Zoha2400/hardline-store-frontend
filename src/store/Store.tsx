import { makeObservable, action, observable, computed } from "mobx";

class State {
  @observable public searchActive = true;
  @observable public searchText = "";
  @observable public filterRender = "default";
  @observable public filters: any = {
    priceRange: [0, 5000],
    manufacturer: "",
    graphicsCard: "",
  };
  @observable public cards: any[] = [];

  constructor() {
    makeObservable(this, {
      searchActive: observable,
      searchText: observable,
      filterRender: observable,
      filters: observable,
      cards: observable,
      setActive: action,
      setText: action,
      setFilterRender: action,
      setFilters: action,
      setCards: action,
      filteredCards: computed,
    });
  }

  setCards(cards: any[]) {
    this.cards = cards;
  }

  setFilterRender(filter: string) {
    this.filterRender = filter;
  }

  setActive() {
    this.searchActive = !this.searchActive;
  }

  setText(text: string) {
    this.searchText = text;
  }

  setFilters(newFilters: Partial<typeof this.filters>) {
    this.filters = { ...this.filters, ...newFilters };
  }

  get filteredCards() {
    let filtered = [...this.cards];
    const { priceRange } = this.filters;
    const filterRender = this.filterRender;

    filtered = filtered.filter(
      (card) => card.price >= priceRange[0] && card.price <= priceRange[1],
    );

    switch (filterRender) {
      case "reverse":
        filtered.reverse();
        break;
      case "cost_down":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "cost_up":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }
}

export const searchStore = new State();
