import type { FunctionComponent, SVGProps } from 'react';
import { useId } from 'react';

import styles from './TaskbarIcon.module.css';

type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

type TaskbarIconProps = {
	ariaControls?: string;
	ariaExpanded?: boolean;
	icon: SvgComponent;
	onClick?: () => void;
	title?: string;
};

export default function TaskbarIcon({
	ariaControls,
	ariaExpanded,
	icon: Icon,
	onClick,
	title
}: TaskbarIconProps) {
	const id = useId();

	return (
		<button
			aria-controls={ariaControls}
			aria-expanded={ariaExpanded}
			aria-haspopup="dialog"
			className={styles.button}
			id={id}
			onClick={onClick}
			type="button"
		>
			<Icon
				className={styles.icon}
				role="img"
				aria-labelledby={title}
				focusable="false"
			>
				{title && <title id={title}>{title}</title>}
			</Icon>
		</button>
	);
}

TaskbarIcon.displayName = 'TaskbarIcon';
