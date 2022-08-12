import Dep from './Dep'
import {observe} from './observe'

export function defineReactive (obj, key, val) {
	const dep = observe(obj).dep

	const property = Object.getOwnPropertyDescriptor(obj, key)
	if (property && property.configurable === false) {
		return
	}

	if (arguments.length === 2) {
		val = obj[key]
	}

	console.log(obj)
	let childOb = observe(val)
	Object.defineProperty(obj, key, {
		enumerable: true,
		configurable: true,
		get: function reactiveGetter () {
			console.log('in get')
			if (Dep.target) {
				dep.depend()
				if (childOb) {
					childOb.dep.depend()
				}
			}
			return val
		},
		set: function reactiveSetter (newVal) {
			console.log('in set')
			if (newVal === val) {
				return
			}
			val = newVal
			childOb = observe(newVal)
			dep.notify()
		}
	})
}
