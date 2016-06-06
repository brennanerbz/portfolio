import Router from './routes';
import styles from './styles/main.scss';

window.app = {
	init() {
		this.router = new Router();
		this.router.history.start()
	}
}
window.app.init();