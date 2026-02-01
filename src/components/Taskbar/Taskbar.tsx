import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg';
import { ReactComponent as FolderIcon } from '../../assets/svg/folder.svg';
import styles from './Taskbar.module.css';
import TaskbarIcon from './TaskbarIcon';

export default function Taskbar() {
	return (
		<aside className={styles.taskbar}>
			<TaskbarIcon
				icon={SettingsIcon}
				title="Settings"
				onClick={() => console.log('open settings modal')}
			/>
			<TaskbarIcon
				icon={FolderIcon}
				title="Purple Potion"
				onClick={() => console.log('toggle purple potion')}
			/>
		</aside>
	);
}

Taskbar.displayName = 'Taskbar';
