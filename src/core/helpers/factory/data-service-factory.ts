import DataServiceFactoryBase from './data-service-factory-base';

export default class DataServiceFactory<Product> extends DataServiceFactoryBase<() => Product> {
  public create(name?: string): Product {
    const method = this.getFactoryMethod(name);

    return method();
  }
}
