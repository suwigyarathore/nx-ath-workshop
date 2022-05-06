import styles from './smart-sample.module.scss';

/* eslint-disable-next-line */
export interface SmartSampleProps {}

export function SmartSample(props: SmartSampleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SmartSample!</h1>
    </div>
  );
}

export default SmartSample;
