import { useId } from 'react';

import styles from './Toggle.module.css';

type ToggleProps = {
	handleToggle(): void;
	isDisabled?: boolean;
	isOn: boolean;
	label?: string;
	name?: string;
	testIdPrefix: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Toggle({
	handleToggle,
	isDisabled = false,
	isOn,
	label = '',
	name = '',
	testIdPrefix,
	...otherProps
}: ToggleProps) {
	const id = useId();

	return (
		<>
			<input
				aria-checked={isOn}
				aria-label={label}
				checked={isOn}
				className={styles.toggleInput}
				id={id}
				disabled={isDisabled}
				name={name}
				onChange={handleToggle}
				data-testid={`${testIdPrefix}-toggle`}
				role="switch"
				type="checkbox"
				{...otherProps}
			/>
			<label htmlFor={id} className={styles.toggleLabel}>
				<span className={styles.toggleHandler} />
			</label>
		</>
	);
}
