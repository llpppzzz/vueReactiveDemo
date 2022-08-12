import {isObject, hasOwn} from './utils'
import Observer from './Observer'

export function observe (value) {
	if (!isObject(value)) {
		return
	}
	let ob
	if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
		ob = value.__ob__
	} else {
		ob = new Observer(value)
	}
	return ob
}
