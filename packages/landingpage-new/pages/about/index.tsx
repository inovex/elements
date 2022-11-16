import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const GITHUB_CONTRIBUTORS_URL =
  'https://api.github.com/repos/inovex/elements/contributors';

enum UserTypes {
  USER = 'User',
  BOT = 'Bot',
}

type User = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  type: UserTypes;
};
export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
  const res = await fetch(GITHUB_CONTRIBUTORS_URL);
  const users: User[] = await res.json();

  return {
    props: { users },
  };
};

function About({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <section>
        <h1>contributors</h1>
        {users
          .filter((user) => user.type === UserTypes.USER)
          .map((user) => (
            <div key={user.id}>
              <h3>{user.login}</h3>
              <Link href={user.html_url}>{user.html_url}</Link>
              <Image
                src={user.avatar_url}
                width={30}
                height={30}
                alt={`Avatar of ${user.login}`}
              />
            </div>
          ))}
      </section>
    </div>
  );
}

export default About;
