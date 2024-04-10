import imgUrl from "../../assets/gb-flag.png";
import styles from "./NavBar.module.css";

const Avatar = () => {
  return (
    <span className={styles.avatar}>
      <img src={imgUrl} alt="avatar-image" className={styles.avatarPic} />
      <b className={styles.b}>Professional Investor</b>
    </span>
  );
};

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <img src="./huguenots-logo.svg" alt="huguenots logo" />
        <Avatar />
      </div>
    </div>
  );
}
