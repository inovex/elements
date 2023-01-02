import styles from './docs.module.scss';
import ReactGuide from 'components/learn/react-guide.mdx';
import '@code-hike/mdx/dist/index.css';

const Learn = () => {
  return (
    <>
      <div className={styles.container}>
        <ReactGuide />
        <h1>
          Looking for more resources? Make sure to check out the example
          projects:
        </h1>
        <iframe
          src="https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark"
          className={styles.sandbox}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </>
  );
};

export default Learn;
