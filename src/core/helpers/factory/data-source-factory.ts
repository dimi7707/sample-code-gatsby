import GraphqlDataSource from '@core/helpers/singleton/graphql-data-source';

export default class DataSourceFactory {
  source: string;

  createDataSource(source: string) {
    this.source = source;
    if (source === 'graphql') {
      return new GraphqlDataSource();
    }

    return undefined;
  }
}
