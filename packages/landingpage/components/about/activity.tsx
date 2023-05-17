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
import useTranslation from 'utils/hooks/useTranslation';

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
  const { t } = useTranslation();

  useEffect(() => {
    const labels = Object.keys(commitsPerMonth);
    const data = Object.values(commitsPerMonth);

    setGraphData({
      labels,
      datasets: [
        {
          fill: true,
          label: t('activity.contributions'),
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
        {t('activity.title_1')} <b>{t('activity.title_2')}</b>
      </h1>
      {graphData.datasets[0]?.data.length === 0 ? (
        <div>{t('activity.not_found')}</div>
      ) : (
        <div className={styles.graphContainer}>
          <Line options={graphOptions} data={graphData} />
        </div>
      )}
    </>
  );
}

export default Activity;
