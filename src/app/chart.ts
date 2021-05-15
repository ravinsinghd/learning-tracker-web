// Uncomment to style it like Apple Watch

// if (!Highcharts.theme) {
//     Highcharts.setOptions({
//         chart: {

//         },
//         colors: [, , ],
//         title: {
//             style: {
//                 color: 'silver'
//             }
//         },
//         tooltip: {
//             style: {
//                 color: 'silver'
//             }
//         }
//     });
// }

/**
 * In the chart render event, add icons on top of the circular shapes
 */
// function renderIcons() {

//     // Move icon
//     if (!this.series[0].icon) {
//         this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
//             .attr({
//                 stroke: '#303030',
//                 'stroke-linecap': 'round',
//                 'stroke-linejoin': 'round',
//                 'stroke-width': 2,
//                 zIndex: 10
//             })
//             .add(this.series[2].group);
//     }
//     this.series[0].icon.translate(
//         this.chartWidth / 2 - 10,
//         this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
//             (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
//     );

//     // Exercise icon
//     if (!this.series[1].icon) {
//         this.series[1].icon = this.renderer.path(
//             ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
//                 'M', 8, -8, 'L', 16, 0, 8, 8]
//         )
//             .attr({
//                 stroke: '#ffffff',
//                 'stroke-linecap': 'round',
//                 'stroke-linejoin': 'round',
//                 'stroke-width': 2,
//                 zIndex: 10
//             })
//             .add(this.series[2].group);
//     }
//     this.series[1].icon.translate(
//         this.chartWidth / 2 - 10,
//         this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
//             (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
//     );

//     // Stand icon
//     if (!this.series[2].icon) {
//         this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
//             .attr({
//                 stroke: '#303030',
//                 'stroke-linecap': 'round',
//                 'stroke-linejoin': 'round',
//                 'stroke-width': 2,
//                 zIndex: 10
//             })
//             .add(this.series[2].group);
//     }

//     this.series[2].icon.translate(
//         this.chartWidth / 2 - 10,
//         this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
//             (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
//     );
// }

export const chartOption: any = {
  chart: {
    type: 'solidgauge',
    backgroundColor: 'black',
    width: 1080,
    height: 2340,
  },

  title: {
    text: 'Activity',
    style: {
      fontSize: '24px',
    },
  },
  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Move
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: 'rgba(246,35,102,0.3)',
        borderWidth: 0,
      },
      {
        // Track for Exercise
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: '#9dff024d',
        borderWidth: 0,
      },
      {
        // Track for Stand
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: '#0ccdd64d',
        borderWidth: 0,
      },
    ],
  },

  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: [],
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: false,
      },
      linecap: 'round',
      stickyTracking: false,
      rounded: true,
    },
  },

  series: [
    {
      name: 'Move',
      data: [
        {
          color: '#F62366',
          radius: '112%',
          innerRadius: '88%',
          y: 80,
        },
      ],
    },
    {
      name: 'Exercise',
      data: [
        {
          color: '#9DFF02',
          radius: '87%',
          innerRadius: '63%',
          y: 65,
        },
      ],
    },
    {
      name: 'Stand',
      data: [
        {
          color: '#0CCDD6',
          radius: '62%',
          innerRadius: '38%',
          y: 50,
        },
      ],
    },
  ],
};
