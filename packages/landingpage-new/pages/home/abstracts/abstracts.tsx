import styles from './abstracts.module.scss';

export default function Abstracts() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.firstAbstract}>
          <p className={styles.head}>
            <b>why</b> use the elements?
          </p>
          <p style={{ fontSize: '20px' }}>
            {' '}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
        <div className={styles.secondAbstract}>
          <p className={styles.head}>
            <b>when</b> use the elements?
          </p>
          <p style={{ fontSize: '20px' }}>
            {' '}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  );
}
