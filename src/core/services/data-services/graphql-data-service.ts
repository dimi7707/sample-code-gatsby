import { graphql, useStaticQuery } from 'gatsby';
import { LandingPageNode } from '@models/landing-page-node';

import { DataService } from './data-service';
import getServicesPages from  '@core/services/data-services/graphql-queries/service-page-query';

export default class GraphqlDataService implements DataService {
  landingPages: LandingPageNode[];
  servicePages: any;

  getServicePages() {
    return getServicesPages();
  }

  getLandingPages(): Promise<LandingPageNode[]> {
    /*this.landingPages = useStaticQuery(graphql`
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
    `).allNodeLandingPage.nodes; */
    this.landingPages = [];
    return new Promise((resolve) => resolve(this.landingPages));
  }
}
