import styles from './activity.module.scss';
import { useContext, useEffect, useMemo, useState } from 'react';
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
import { I18NContext } from '../../../../utils/context/i18nContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
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
  const { t } = useContext(I18NContext);

  useEffect(() => {
    const labels = Object.keys(commitsPerMonth);
    const data = Object.values(commitsPerMonth);
    const inovexTheme = document.querySelector('.inovex-elements-theme');
    const style = getComputedStyle(inovexTheme!);
    const primaryColor = style.getPropertyValue('--inovex-elements-primary');
    const primaryFocusColor = style.getPropertyValue(
      '--inovex-elements-primary-focus',
    );
    setGraphData({
      labels,
      datasets: [
        {
          fill: true,
          label: t('about.activity.contributions'),
          data,
          borderColor: primaryColor,
          backgroundColor: primaryFocusColor,
        },
      ],
    });
  }, [commitsPerMonth]);

  return (
    <>
      <h1 className="header-d3">
        {t('about.activity.title_1')} <b>{t('about.activity.title_2')}</b>
      </h1>
      {graphData.datasets[0]?.data.length === 0 ? (
        <div>{t('about.activity.not_found')}</div>
      ) : (
        <div className={styles.graphContainer}>
          <Line options={graphOptions} data={graphData} />
        </div>
      )}
    </>
  );
}

export default Activity;
