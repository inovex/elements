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

const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

interface GithubActivity {
    days: number[];
    total: number;
    week: number;
    date?: Date
}

interface GraphActivity {
  contributions: number;
  month: string;
  year: number;
}

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';

function fillDate(activities: GithubActivity[]): GithubActivity[] {
    activities.forEach(activity => {
        activity.date = new Date(activity.week * 1000)
        return activity;
    });
    return activities;
}

function generateGraphActivities(githubActivities: GithubActivity[]): GraphActivity[] {
    githubActivities = fillDate(githubActivities);
    const graphActivities: GraphActivity[] = [];
  
    githubActivities.forEach(activity => {
      const currentMonth = activity.date?.getMonth() !== undefined ? months[activity.date?.getMonth()] : undefined;
      const currentYear = activity.date?.getFullYear();

      const yearAction = graphActivities.find((action) => action.month === currentMonth && action.year === currentYear);
      if (yearAction) {
        yearAction.contributions = yearAction.contributions + activity.total;
      } else if (currentMonth && currentYear) {
        graphActivities.push({
          contributions: activity.total,
          month: currentMonth,
          year: currentYear
        })
      }
    });
    return graphActivities;
}

async function getGithubActivities(): Promise<GithubActivity[]> {
    return await fetch(
        GITHUB_REPO_URL + '/stats/commit_activity'
    ).then((resp) => resp.json());
}

function Activity() {
    const [graphActivities, setGraphActivities] = useState([] as GraphActivity[]);

    useEffect(() => {
      getGithubActivities().then(githubActivities => setGraphActivities(generateGraphActivities(githubActivities)))
    }, [])

    const graphData = {
      labels: graphActivities.map((graphActivity) => graphActivity.month + ' ' + graphActivity.year),
      datasets: [
        {
          fill: true,
          label: 'contributions',
          data: graphActivities.map(graphActivity => graphActivity.contributions),
          borderColor: 'rgba(44, 2, 255, 1)',
          backgroundColor: 'rgba(44, 2, 255, 0.5)',
        },
      ],
    };

    const graphOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        }
      },
    };

    return (<>
        <h1 className={styles.header}>
            our <b>activity</b>
        </h1>
        <div className={styles.graphContainer}>
          <Line options={graphOptions} data={graphData} />
        </div>
    </>);
}

export default Activity;