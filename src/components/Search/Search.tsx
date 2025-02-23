import { useState } from "react";
import styles from "./styles.module.css";
const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path
      id="Icon_ionic-md-search"
      data-name="Icon ionic-md-search"
      d="M18.745,17.071h-.912l-.342-.286a7.564,7.564,0,0,0,1.767-4.857,7.379,7.379,0,1,0-7.351,7.429,7.637,7.637,0,0,0,4.843-1.771l.342.286v.914l5.7,5.714L24.5,22.786Zm-6.838,0a5.143,5.143,0,1,1,5.128-5.143A5.114,5.114,0,0,1,11.908,17.071Z"
      transform="translate(-4.5 -4.5)"
      fill="#d0043c"
    />
  </svg>
);

type Props = {
  placeHolder: string;
  handleChange: (selected: string) => void;
};

export default function Search({ placeHolder, handleChange }: Props) {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <label htmlFor="search">{searchIcon}</label>
      <h3>SEARCH</h3>
      <input
        className={styles.input}
        id="search"
        type="text"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          handleChange(target.value);
        }}
        placeholder={placeHolder}
      />
    </div>
  );
}
