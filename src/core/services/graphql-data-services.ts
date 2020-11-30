import DataSourceFactory from '@core/helpers/factory/data-source-factory';

export default class GraphqlDataServices {
  factory: DataSourceFactory;

  constructor() {
    this.factory = new DataSourceFactory();
  }

  getAllLandingPages() {
    const landingPages = this.factory.createDataSource('graphql');
    return landingPages.getAllLandingPages();
  }
}
