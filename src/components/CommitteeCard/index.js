import Image from '@theme/IdealImage';
import styles from './styles.module.css';

export default function CommitteeCard({name, role, img}) {
  return (
    <div className="avatar">
      <Image
        className={`avatar__photo avatar__photo--lg ${styles.avatar__photo}`}
        img={img ? img : '/assets/roboLogo.svg'} />
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        {role && <small className="avatar__subtitle">{role}</small>}
      </div>
    </div>
  );
}
