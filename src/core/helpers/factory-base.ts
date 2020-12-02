/**
 * Base class for factory templates.
 */
export default class FactoryBase<FactoryMethod> {
  private factoryMethods = new Map<string, FactoryMethod>();

  private defaultName = '';

  /**
   * Gets the names of the available product's strategies.
   *
   * @returns The name collection.
   */
  public getAvailableStrategies(): IterableIterator<string> {
    return this.factoryMethods.keys();
  }

  /**
   * Sets the default strategy name.
   *
   * @param name The name of the default strategy.
   *
   * @throws {Error} If the name is not registered.
   */
  public setDefaultStrategy(name: string): void {
    if (!this.factoryMethods.has(name)) {
      throw new Error('The strategy is not registered.');
    }

    this.defaultName = name;
  }

  /**
   * Gets the default strategy name.
   *
   * @returns The name of the default strategy.
   */
  public getDefaultStrategy(): string {
    return this.defaultName;
  }

  /**
   * Registers a new, or updates an existing, strategy in the factory.
   *
   * @param name   The strategy name.
   * @param method The factory method.
   */
  public register(name: string, method: FactoryMethod): void {
    this.factoryMethods.set(name, method);

    if (this.factoryMethods.size === 1) {
      this.setDefaultStrategy(name);
    }
  }

  /**
   * Gets the factory method for the given strategy.
   *
   * @param strategy The name of the strategy; or 'undefined' to refer to the default strategy.
   *
   * @returns The factory method.
   *
   * @throws {Error} If the method is not registered.
   */
  protected getFactoryMethod(strategy?: string): FactoryMethod {
    const method = this.factoryMethods.get(strategy || this.getDefaultStrategy());

    if (method === undefined) {
      throw new Error(`The strategy "${strategy}" is not registered.`);
    }

    return method;
  }
}
