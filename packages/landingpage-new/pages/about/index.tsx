import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GithubContributor } from '../../types/githubContributor';
import { UserTypes } from '../../types/githubUserTypes';

const GITHUB_CONTRIBUTORS_URL =
  'https://api.github.com/repos/inovex/elements/contributors';

enum GITHUB_CONTRIBUTOR_ID_WHITELIST {
  janivo = 22963121,
  silentHoo = 1610894,
  pfecht = 26819398,
  BenPag = 23154336,
  JCofman = 2118956,
  Sl1nd = 12165722,
  MariaLStefan = 103122411,
  AlessaRad = 76041234,
  TobiasHeimGalindo = 81302108,
}

export const getStaticProps: GetStaticProps<{
  users: GithubContributor[];
}> = async () => {
  const res = await fetch(GITHUB_CONTRIBUTORS_URL);
  const users: GithubContributor[] = await res.json();
  const whitelistedIds = Object.values(GITHUB_CONTRIBUTOR_ID_WHITELIST);
  const filteredUser = users.filter(
    (user) => user.type === UserTypes.USER && whitelistedIds.includes(user.id)
  );

  return {
    props: { users: filteredUser },
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
