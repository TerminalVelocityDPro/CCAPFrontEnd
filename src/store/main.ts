import { reactive, readonly } from "vue";

// Create a base Store class to base all of the stores off of.
export abstract class Store<T extends Record<string, any>> {
  // Creates a state that stores all of the data in each store
  protected state: T;

  // Store Constructor.
  constructor() {
    const data = this.data();
    this.setup(data);
    this.state = reactive(data) as T;
  }

  protected abstract data(): T;

  protected setup(data: T): void {} //eslint-disable-line @typescript-eslint/no-empty-function

  // Gets the current state of the object
  public getState(): T {
    return readonly(this.state) as T;
  }
}
