import styles from './activity.module.scss';
import { useEffect, useState } from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { GithubCommitsPerMonth } from 'types/github';
import classNames from 'classnames';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const graphOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

type Props = {
  commitsPerMonth: GithubCommitsPerMonth;
};

function Activity({ commitsPerMonth }: Props) {
  const [graphData, setGraphData] = useState({
    datasets: [],
    labels: [],
  } as ChartData<'line', number[], string>);

  useEffect(() => {
    const labels = Object.keys(commitsPerMonth);
    const data = Object.values(commitsPerMonth);

    setGraphData({
      labels,
      datasets: [
        {
          fill: true,
          label: 'contributions',
          data,
          borderColor: '#4F46FF',
          backgroundColor: '#BECCFF50',
        },
      ],
    });
  }, [commitsPerMonth]);

  return (
    <>
      <h1 className="header-d3">
        our <b>activity</b>
      </h1>
      {graphData.datasets.length === 0 ? (
        <div>No recent activity found.</div>
      ) : (
        <div className={styles.graphContainer}>
          <Line options={graphOptions} data={graphData} />
        </div>
      )}
    </>
  );
}

export default Activity;
