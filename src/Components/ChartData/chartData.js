export const barChartDataDailyTraffic = [
  {
    name: 'Daily Traffic',
    data: [60, 40, 100, 60, 80, 30, 70, 100, 90, 80, 70, 80]
  }
]

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false
    }
    // width: '5em'
  },
  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined
    },
    onDatasetHover: {
      style: {
        fontSize: '12px',
        fontFamily: undefined
      }
    },
    theme: 'dark'
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    show: false,
    labels: {
      show: true,
      style: {
        colors: '#A3AED0',
        fontSize: '1em',
        fontWeight: '500'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false,
    color: 'black',
    labels: {
      show: true,
      style: {
        colors: '#CBD5E0',
        fontSize: '14px'
      }
    }
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true
      }
    },
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#4318FF',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(67, 24, 255, 1)',
            opacity: 0.28
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: '#f2efff',
            opacity: 1
          }
        ]
      ]
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '30em',
      distributed: true,
      dataLabels: {
        enabled: false
      }
    }
  }
}

export const donutChartDataCharts1 = [30, 35, 35]

export const donutChartOptionsCharts1 = {
  series: [30, 35, 35],
  labels: ['From plat 1', 'From Plat 2', ''],
  colors: ['#e56095', '#7867ea', '#f1effc'],
  chart: {
    width: '100%'
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  // margin: {
  //   top: '5em'
  // },
  padding: {
    top: '5em'
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  hover: { mode: null },
  plotOptions: {
    pie: {
      expandOnClick: true,
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
            fontSize: '22px',
            fontWeight: '600',
            label: '65%',
            formatter: () => 'customers'
          }
        }
      }
    }
  },

  fill: {
    colors: ['#e56095', '#7867ea', '#f1effc']
  },
  tooltip: {
    enabled: true,
    theme: 'dark'
  }
}
