import styles from "./styles.module.css";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img src="./huguenots-logo.svg" alt="huguenots logo" />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
        <span>
          <a className={styles.link} href="about:blank">
            Terms of Use
          </a>
          <a className={styles.link} href="about:blank">
            Legal Terms
          </a>
          <a className={styles.link} href="about:blank">
            Privacy Policy
          </a>
          <a className={styles.link} href="about:blank">
            Cookie Policy
          </a>
        </span>
      </div>
    </footer>
  );
}
