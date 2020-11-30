import { graphql, useStaticQuery } from 'gatsby';
import { LandingPageNode } from '@models/landing-page-node';
import DataSource from './data-source';

export default class GraphqlDataSource extends DataSource {
  landingPages: LandingPageNode[];

  constructor() {
    super('graphql');
  }

  getAllLandingPages(): LandingPageNode[] {
    this.landingPages = useStaticQuery(graphql`
      query {
        allNodeLandingPage {
          nodes {
            body {
              format
              processed
              summary
              value
            }
            created
            title
          }
        }
      }
    `).allNodeLandingPage.nodes;

    return this.landingPages;
  }
}
