import styles from './MapPage.module.css';
import Header from '../../components/Header';
import Map from './Map';

const MapPage = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Map className={styles.content} />
    </div>
  );
};

export default MapPage;
