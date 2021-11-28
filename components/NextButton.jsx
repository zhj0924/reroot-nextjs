import styles from "./NextButton.module.scss";

export default function nextButton(props) {
  return (
    <input
      className={`${styles.button} btn btn-dark`}
      type="button"
      value="Next"
      name="next"
      onClick={props.handleClick}
    />
  );
}
