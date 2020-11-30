import { graphql, useStaticQuery } from 'gatsby';
import DataSource from './data-source';

export default class GraphqlDataSource extends DataSource {
  serviceResponse: any;

  constructor() {
    super('graphql');
  }

  getAllLandingPages() {
    this.serviceResponse = useStaticQuery(graphql`
      query{
        allNodeArticle {
          nodes {
            id
            title
            body {
              processed
            }
          }
        }
      }
    `);
    return this.serviceResponse;
  }
}
