import styles from './activity.module.scss';
import Highcharts from 'highcharts';
import { useEffect } from 'react';

interface GithubActivity {
    days: number[];
    total: number;
    week: number;
}

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';

async function getGithubActivities(): Promise<GithubActivity[]> {
    return await fetch(
        GITHUB_REPO_URL + '/stats/commit_activity'
    ).then((resp) => resp.json());
}

function Activity() {
    useEffect(() => {
        getGithubActivities().then((activities: GithubActivity[]) => {
            Highcharts.chart('chart', {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Contributions this year'
                },
                xAxis: {
                    title: {
                        text: 'Weeks'
                    },
                    allowDecimals: false,
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'Number of commits'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                plotOptions: {
                    area: {
                        pointStart: 0,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'Commits',
                    data: activities.map(activity => activity.total)
                }]
            });
        })
    }, [])

    return (<>
        <h1 className={styles.header}>
            our <b>activity</b>
        </h1>
        <div id="chart"></div>
    </>);
}

export default Activity;