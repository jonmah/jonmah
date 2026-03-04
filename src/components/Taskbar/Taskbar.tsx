import { ReactComponent as AppsIcon } from '../../assets/svg/apps.svg';
import { ReactComponent as FolderIcon } from '../../assets/svg/folder.svg';
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg';
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
				icon={AppsIcon}
				title="Apps"
				onClick={() => console.log('toggle apps')}
			/>
			<TaskbarIcon
				icon={FolderIcon}
				title="Folder"
				onClick={() => console.log('toggle folder')}
			/>
		</aside>
	);
}

Taskbar.displayName = 'Taskbar';
