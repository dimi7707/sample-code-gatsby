import { LandingPageNode } from '@models/landing-page-node';

export interface DataService {
  getLandingPages(source: string): LandingPageNode[];
}
