export const chartOption: any = {
  chart: {
    type: 'solidgauge',
    backgroundColor: 'black',
    // width: 1080,
    // height: 2340,
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
        backgroundColor: 'rgba(157,255,2,0.3)',
        borderWidth: 0,
      },
      {
        // Track for Stand
        outerRadius: '62%',
        innerRadius: '38%',
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
