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

interface GithubActivity {
  days: number[];
  total: number;
  week: number;
  date?: Date;
}

interface GraphActivity {
  contributions: number;
  date: string;
}

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';

function fillDate(activities: GithubActivity[]): GithubActivity[] {
  activities.forEach((activity) => {
    activity.date = new Date(activity.week * 1000);
    return activity;
  });
  return activities;
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

async function getGithubActivities(): Promise<GithubActivity[]> {
  return await fetch(GITHUB_REPO_URL + '/stats/commit_activity').then((resp) =>
    resp.json()
  );
}

const graphOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

function Activity() {
  const [labels, setLabels] = useState([] as string[]);
  const [contributions, setContributions] = useState([] as number[]);
  const [graphData, setGraphData] = useState({
    datasets: [],
    labels: [],
  } as ChartData<'line', number[], unknown>);

  useEffect(() => {
    getGithubActivities().then((githubActivities) => {
      githubActivities = fillDate(githubActivities);
      const [newLabels, newContributions] = generateGraphData(githubActivities);
      setLabels(newLabels);
      setContributions(newContributions);
    });
  }, []);

  useEffect(() => {
    setGraphData({
      labels,
      datasets: [
        {
          fill: true,
          label: 'contributions',
          data: contributions,
          borderColor: '#4F46FF',
          backgroundColor: '#BECCFF50',
        },
      ],
    });
  }, [labels, contributions]);

  return (
    <>
      <h1 className={styles.header}>
        our <b>activity</b>
      </h1>
      <div className={styles.graphContainer}>
        <Line options={graphOptions} data={graphData} />
      </div>
    </>
  );
}

export default Activity;
