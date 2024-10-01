import styles from './Toggle.module.css';

type ToggleProps = {
  handleToggle(): void;
  isOn: boolean;
  testIdPrefix: string;
};

export default function Toggle({
  handleToggle,
  isOn,
  testIdPrefix,
}: ToggleProps) {
  const id = crypto.randomUUID();

  return (
    <>
      <input
        checked={isOn}
        className={styles.toggleInput}
        id={id}
        onChange={handleToggle}
        data-testid={`${testIdPrefix}-toggle`}
        type="checkbox"
      />
      <label htmlFor={id} className={styles.toggleLabel}>
        <span className={styles.toggleHandler}></span>
      </label>
    </>
  );
}