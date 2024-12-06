import { makeObservable, action, observable } from "mobx";

class State {
  @observable public searchActive = true;
  @observable public searchText = "";

  constructor() {
    makeObservable(this, {
      searchActive: observable,
      searchText: observable,
      setActive: action,
      setText: action,
    });
  }

  setActive() {
    this.searchActive = !this.searchActive;
  }

  setText(text: string) {
    this.searchText = text;
  }
}

export const searchStore = new State();
