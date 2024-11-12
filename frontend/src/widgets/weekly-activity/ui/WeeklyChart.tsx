import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        drawTicks: false,
        color: '#F3F3F5',
      },
      border: {
        display: false,
      },
      ticks: {
        stepSize: 100,
      },
    },
  },
  plugins: {
    legend: {
      rtl: true,
      labels: {
        usePointStyle: true,
        color: '#718EBF',
      },
    },
    datalabels: { 
      display: false
    }
  },
  maintainAspectRatio: false,
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function WeeklyChart() {

  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [480, 350, 320, 480, 150, 395, 400],
        backgroundColor: '#1814F3',
        borderRadius: 30,
        barThickness: 15,
        categoryPercentage: 0.6,
        barPercentage: 0.9,
      },
      {
        label: 'Withdraw',
        data: [250, 120, 270, 380, 240, 240, 330],
        backgroundColor: '#16DBCC',
        borderRadius: 30,
        barThickness: 15,
        categoryPercentage: 0.6,
        barPercentage: 0.9,
      },
    ],
  }

  return (
    <div className="bg-white py-[28px] px-[30px] rounded-[25px] h-full">
      <Bar options={options} data={data} />
    </div>
  )
}
