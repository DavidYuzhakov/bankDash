import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, ChartDataLabels)

const options = {
  scales: {
    r: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
    },
    datalabels: {
      color: '#fff',
      font: {
        family: 'Inter',
        size: 14,
        weight: 700,
      },
      formatter: (value: any) => {
        return `${value}%`
      }
    },
  },
}

export function ExpenseChart() {
  const data = {
    labels: ['Bill Expense', 'Others', 'Investment', 'Entertainment'],
    datasets: [
      {
        label: '%',
        data: [15, 35, 20, 30],
        backgroundColor: ['#FC7900', '#1814F3', '#FA00FF', '#343C6A'],
        borderWidth: 8,
        borderColor: '#fff',
      },
    ],
  }

  return (
    <div className="p-7 rounded-3xl bg-white">
      <PolarArea data={data} options={options} />
    </div>
  )
}
