import { LandingPageNode } from '@models/landing-page-node';
import { DataService } from './data-service';

export default class DebugDataService implements DataService {
  landingPages: LandingPageNode[] = [];

  getLandingPages(): Promise<LandingPageNode[]> {
    return new Promise((resolve) => resolve(this.landingPages));
  }
}
