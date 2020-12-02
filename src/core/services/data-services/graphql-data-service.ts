import { graphql, useStaticQuery } from 'gatsby';
import { LandingPageNode } from '@models/landing-page-node';
import { DataService } from './data-service';

export default class GraphqlDataService implements DataService {
  landingPages: LandingPageNode[];

  getLandingPages(): Promise<LandingPageNode[]> {
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

    return new Promise((resolve) => resolve(this.landingPages));
  }
}
