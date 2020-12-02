import Factory from '@core/helpers/factory';
import { DataService } from '@core/services/data-services/data-service';
import GraphqlDataServices from '@core/services/data-services/graphql-data-service';
import DebugDataServices from '@core/services/data-services/debug-data-service';

/**
 * Creates the factory for data services.
 *
 * @returns The factory instance.
 */
export default function createDataServices(): Factory<DataService> {
  const factory = new Factory<DataService>();

  factory.register('graphql', () => new GraphqlDataServices());
  factory.register('debug', () => new DebugDataServices());

  return factory;
}
