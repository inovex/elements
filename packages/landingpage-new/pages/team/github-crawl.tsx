import styles from './github-crawl.module.scss';
import { InferGetStaticPropsType, GetStaticProps } from 'next';

type User = {
  id: number;
  login: string;
};
export const getStaticProps: GetStaticProps<{ users: User[] }> = async (
  context
) => {
  const res = await fetch(
    'https://api.github.com/repos/inovex/elements/contributors'
  );
  const users: User[] = await res.json();

  return {
    props: { users },
  };
};

function GithubCrawl({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(users)
  return (
    <div>
      <h1>contributors</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.login}</h3>
        </div>
      ))}
    </div>
  );
}

export default GithubCrawl;
