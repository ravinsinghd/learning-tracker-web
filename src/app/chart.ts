export const SERIES_DATA = [
  {
    name: 'Move',
    data: [
      {
        color: '#F62366',
        radius: '115%',
        innerRadius: '95%',
        y: 10,
      },
    ],
  },
  {
    name: 'Move',
    data: [
      {
        color: '#9ACD32',
        radius: '95%',
        innerRadius: '75%',
        y: 10,
      },
    ],
  },
  {
    name: 'Move',
    data: [
      {
        color: '#FFAE42',
        radius: '75%',
        innerRadius: '55%',
        y: 10,
      },
    ],
  },
  {
    name: 'Exercise',
    data: [
      {
        color: '#9DFF02',
        radius: '55%',
        innerRadius: '35%',
        y: 65,
      },
    ],
  },
  {
    name: 'Stand',
    data: [
      {
        color: '#0CCDD6',
        radius: '35%',
        innerRadius: '15%',
        y: 50,
      },
    ],
  },
];
export const CHART_OPTION: any = {
  chart: {
    type: 'solidgauge',
    backgroundColor: 'black',
  },
  title: {
    text: '',
    style: {
      fontSize: '12px',
    },
  },
  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Move
        outerRadius: '115%',
        innerRadius: '95%',
        backgroundColor: 'rgba(246,35,102,0.3)',
        borderWidth: 0,
      },
      {
        // Track for Move
        outerRadius: '95%',
        innerRadius: '75%',
        backgroundColor: 'rgba(154,205,50,0.3)',
        borderWidth: 0,
      },
      {
        // Track for Move
        outerRadius: '75%',
        innerRadius: '55%',
        backgroundColor: 'rgba(255,174,66,0.3)',
        borderWidth: 0,
      },
      {
        // Track for Exercise
        outerRadius: '55%',
        innerRadius: '35%',
        backgroundColor: 'rgba(157,255,2,0.3)',
        borderWidth: 0,
      },
      {
        // Track for Stand
        outerRadius: '35%',
        innerRadius: '15%',
        backgroundColor: 'rgba(12,205,214,0.3)',
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
  series: [],
};
