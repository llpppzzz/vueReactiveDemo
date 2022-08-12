import Watcher from './Watcher'
import {observe} from './observe'

class Vue {
	constructor(options) {
		if (options && typeof options.data === 'function') {
			this._data = options.data.apply(this);
		}
		observe(this._data);
	}
	mount () {
		new Watcher(this, this.render)
	}
	render() {
		console.log(this._data.text)
	}
}

const vue = new Vue({
	data() {
		return {
			text: {
				a: 123123
			}
		}
	}
})
vue.mount()
vue._data.text.a = 123
