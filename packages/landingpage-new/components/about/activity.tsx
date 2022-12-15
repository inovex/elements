import styles from './activity.module.scss';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { GithubActivity } from 'types/githubActivity';

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

interface GraphActivity {
  contributions: number;
  date: string;
}

function generateGraphData(
  githubActivities: GithubActivity[]
): [string[], number[]] {
  const graphActivities: GraphActivity[] = [];

  githubActivities.forEach((activity) => {
    const currentDate = activity.date
      ? activity.date.toLocaleString('en-US', {
          month: 'short',
          year: '2-digit',
        })
      : undefined;

    const yearAction = graphActivities.find(
      (action) => action.date === currentDate
    );
    if (yearAction) {
      yearAction.contributions = yearAction.contributions + activity.total;
    } else if (currentDate) {
      graphActivities.push({
        contributions: activity.total,
        date: currentDate,
      });
    }
  });
  return [
    graphActivities.map((activity) => activity.date),
    graphActivities.map((activity) => activity.contributions),
  ];
}

const graphOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

type Props = {
  githubActivities: GithubActivity[];
};

function Activity({ githubActivities }: Props) {
  const [graphData, setGraphData] = useState({
    datasets: [],
    labels: [],
  } as ChartData<'line', number[], string>);

  useEffect(() => {
    const [newLabels, newContributions] = generateGraphData(githubActivities);
    setGraphData({
      labels: newLabels,
      datasets: [
        {
          fill: true,
          label: 'contributions',
          data: newContributions,
          borderColor: '#4F46FF',
          backgroundColor: '#BECCFF50',
        },
      ],
    });
  }, [githubActivities]);

  return (
    <>
      <h1 className={styles.header}>
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
