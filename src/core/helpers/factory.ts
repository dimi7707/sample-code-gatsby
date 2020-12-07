import FactoryBase from './factory-base';

/**
 * Template for factory with creation options (configuration).
 */
export default class Factory<Product> extends FactoryBase<() => Product> {
  /**
   * Creates a new instance of the product.
   *
   * @param name The name of the product's strategy.
   *
   * @returns The new instance.
   */
  public create(name?: string): Product {
    const method = this.getFactoryMethod(name);

    return method();
  }
}
