import { AfterViewInit, Component } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  title = 'learning-tracker-web';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options | null = null;
  updateFlag: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getStatCounts().subscribe((data) => {
      // const imageRequest = { infile: chartOption };
      // this.appService.getStatImage(imageRequest).subscribe((data: any) => {
      //   console.log(data);
      //   saveAs(data, 'stat.png');
      // });
    });
  }

  ngAfterViewInit() {
    this.chartOptions = chartOption;
    this.updateFlag = true;
  }
}
