import { AfterViewInit, Component } from '@angular/core';
import { saveAs } from 'file-saver';
import _cloneDeep from 'lodash.clonedeep';
import * as Highcharts from 'highcharts';
const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);
const HC_solid_gauge = require('highcharts/modules/solid-gauge.src');
HC_solid_gauge(Highcharts);

import { AppService } from './app.service';
import { CHART_OPTION, SERIES_DATA } from './chart';
import { getCompletedPercentage } from './helper';

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
  seriesData = _cloneDeep(SERIES_DATA);
  chartOption = _cloneDeep(CHART_OPTION);

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getStatCounts().subscribe((data) => {
      const percentages = getCompletedPercentage(data);
      const percentagesLength = percentages.length;
      const requiredSeries = this.seriesData.slice(0, percentagesLength);
      const chartSeries = requiredSeries.map((series, index) => {
        series.name = percentages[index].label;
        series.data[0].y = percentages[index].percentage;
        return series;
      });
      this.chartOption.series = chartSeries;
      this.chartOptions = this.chartOption;
      this.updateFlag = true;
    });
  }
  mobileWallpaperDownload() {
    if (!this.chartOptions) {
      return;
    }
    const mobileChartOption: Highcharts.Options = _cloneDeep(this.chartOptions);
    mobileChartOption.chart = mobileChartOption.chart ? { ...mobileChartOption.chart, width: 1080 } : {};
    mobileChartOption.chart = mobileChartOption.chart ? { ...mobileChartOption.chart, height: 2340 } : {};
    const imageRequest = { infile: mobileChartOption };
    this.appService.getStatImage(imageRequest).subscribe((data: any) => {
      saveAs(data, 'mobile_wallpaper.png');
    });
  }

  desktopWallpaperDownload() {
    if (!this.chartOptions) {
      return;
    }
    const mobileChartOption: Highcharts.Options = _cloneDeep(this.chartOptions);
    mobileChartOption.chart = mobileChartOption.chart ? { ...mobileChartOption.chart, width: 1920 } : {};
    mobileChartOption.chart = mobileChartOption.chart ? { ...mobileChartOption.chart, height: 1080 } : {};
    const imageRequest = { infile: mobileChartOption };
    this.appService.getStatImage(imageRequest).subscribe((data: any) => {
      saveAs(data, 'desktop_wallpaper.png');
    });
  }

  ngAfterViewInit() {}
}
