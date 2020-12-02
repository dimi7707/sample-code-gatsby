import FactoryBase from './factory-base';

/**
 * Template for factory with creation options (configuration).
 */
export default class FactoryWithOptions<
  Product,
  Options extends Exclude<object, string>
> extends FactoryBase<(options: Options) => Product> {
  /**
   * Creates a new instance of the product.
   *
   * @param options The construction options.
   * @param name    The name of the product's strategy.
   *
   * @returns The new instance.
   */
  public create(options: Options, name?: string): Product {
    const method = this.getFactoryMethod(name);

    return method(options);
  }
}
