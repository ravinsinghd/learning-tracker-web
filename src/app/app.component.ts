import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import * as Highcharts from 'highcharts';
const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);
const HC_solid_gauge = require('highcharts/modules/solid-gauge.src');
HC_solid_gauge(Highcharts);

import { AppService } from './app.service';
import { chartOption } from './chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learning-tracker-web';
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = chartOption; // required
  updateFlag: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    setTimeout(() => {
      this.chartOptions = chartOption;
      this.updateFlag = true;
      const imageRequest = { infile: chartOption };
      this.appService.getStatImage(imageRequest).subscribe((data: any) => {
        console.log(data);
        saveAs(data, 'stat.png');
      });
    }, 5000);
  }
}
