import DataServiceFactory from '@core/helpers/factory/data-service-factory';
import GraphqlDataServices from '@core/helpers/singleton/graphql-data-service';

export default class GraphqlServices {
  private factory;

  createFactory(type: string) {
    this.factory = new DataServiceFactory();

    if (type === 'graphql') {
      this.factory.register(type, () => new GraphqlDataServices());
    }

    return this.factory;
  }
}
