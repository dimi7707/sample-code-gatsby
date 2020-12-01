export default class DataServiceFactoryBase<FactoryMethod> {
  private factoryMethods = new Map<string, FactoryMethod>();

  private defaultName = '';

  public getAvailableStrategies(): IterableIterator<string> {
    return this.factoryMethods.keys();
  }

  public setDefaultStrategy(name: string): void {
    if (!this.factoryMethods.has(name)) {
      throw new Error('The strategy is not registered.');
    }

    this.defaultName = name;
  }

  public getDefaultStrategy(): string {
    return this.defaultName;
  }

  public register(name: string, method: FactoryMethod): void {
    this.factoryMethods.set(name, method);

    if (this.factoryMethods.size === 1) {
      this.setDefaultStrategy(name);
    }
  }

  public getFactoryMethod(strategy?: string): FactoryMethod {
    const method = this.factoryMethods.get(strategy || this.getDefaultStrategy());

    if (method === undefined) {
      throw new Error(`The strategy "${strategy}" is not registered.`);
    }

    return method;
  }
}
