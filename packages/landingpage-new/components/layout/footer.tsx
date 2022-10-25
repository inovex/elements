import styles from './footer.module.scss';
import { Routes } from './routes';
import LinkItem from './linkItem';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {Routes.map(({ name, url, subRoutes }) => (
        <div key={url} className={styles.col}>
          <LinkItem url={url} name={name} />
          {subRoutes.map(({ name: subRouteName, url: subRouteUrl }) => (
            <LinkItem
              key={url}
              url={subRouteUrl}
              name={subRouteName}
              isDense={true}
            />
          ))}
        </div>
      ))}
    </footer>
  );
}
