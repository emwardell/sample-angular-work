import { ChartData } from './chart-data.model';
import { ChartOptions } from './chart-options.model';

export class ChartConfig {
    data: ChartData;
    options?: ChartOptions;
    type: string;
}