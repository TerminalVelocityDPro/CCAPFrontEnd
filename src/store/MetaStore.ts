import { Store } from "./main";
import { Meta } from "../interfaces";

// Stores all of the data that's actually represented
// in a way that can be accessed by all of the components.
class MetaStore extends Store<Meta> {
  protected data(): Meta {
    // Initial Data
    return {
      selected: 0
    };
  }

  // Update the store
  update(selected: number) {
    this.state.selected = selected;
  }
}

// Export singleton class used for managing state
export const metaStore: MetaStore = new MetaStore();
