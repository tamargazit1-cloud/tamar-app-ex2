import styles from "./page.module.css";
import getRandomDepartment from "./getRandomDepartment";
import getArtData from "./getArtData";

interface ArtItemProps {
  objectID: number;
}

interface ArtObject {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImage: string;
  objectDate: string;
  medium: string;
  department: string;
  creditLine: string;
  dimensions: string;
}

function getRandomCount(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export default async function ArtApp() {
  try {
    console.log('Fetching random department and art data...');
    const randomDepartment = await getRandomDepartment();
    const randomCount = getRandomCount();
    const artObjects = await getArtData(randomDepartment.departmentId.toString(), randomCount);

    return (
      <main className={styles.container}>
        <h1 className={styles.title}>{randomDepartment.displayName}</h1>
        <div className={styles.gallery}>
          {artObjects.map((artObject: ArtObject) => (
            <ArtItem key={artObject.objectID} artObject={artObject} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Error loading art collection</h1>
        <p>Please try again later.</p>
      </main>
    );
  }
}

function ArtItem({ artObject }: { artObject: ArtObject }) {
  return (
    <article className={styles.artItem}>
      {artObject.primaryImage && (
        <img 
          src={artObject.primaryImage} 
          alt={artObject.title || 'Untitled'} 
          className={styles.artImage}
        />
      )}
      <div className={styles.artInfo}>
        <h2 className={styles.artTitle}>{artObject.title || 'Untitled'}</h2>
        <p className={styles.artist}>
          <strong>Artist:</strong> {artObject.artistDisplayName || 'Unknown'}
        </p>
        <p className={styles.date}>
          <strong>Date:</strong> {artObject.objectDate || 'Unknown'}
        </p>
        <p className={styles.medium}>
          <strong>Medium:</strong> {artObject.medium || 'Unknown'}
        </p>
        <p className={styles.department}>
          <strong>Department:</strong> {artObject.department || 'Unknown'}
        </p>
        <p className={styles.dimensions}>
          <strong>Dimensions:</strong> {artObject.dimensions || 'Unknown'}
        </p>
        <p className={styles.credit}>
          <strong>Credit:</strong> {artObject.creditLine || 'Unknown'}
        </p>
      </div>
    </article>
  );
}

