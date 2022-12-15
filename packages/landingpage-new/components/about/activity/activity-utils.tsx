import { GithubActivity } from 'types/githubActivity';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';

export function fillDate(activities: GithubActivity[]): GithubActivity[] {
  activities.forEach((activity) => {
    activity.date = new Date(activity.week * 1000);
    return activity;
  });
  return activities;
}

export async function getGithubActivities(): Promise<GithubActivity[]> {
  return await fetch(GITHUB_REPO_URL + '/stats/commit_activity').then((resp) =>
    resp.json()
  );
}
