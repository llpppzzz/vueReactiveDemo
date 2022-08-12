import Dep from './Dep'

export default class Watcher {
	constructor (vm, expOrFn) {
		this.vm = vm
		this.getter = expOrFn
		this.deps = []
		this.value = this.get()
	}
	get () {
		Dep.target = this
		const vm = this.vm
		let value = this.getter.call(vm, vm)
		Dep.target = null
		return value
	}
	addDep (dep) {
		dep.addSub(this)
	}
	update () {
		const vm = this.vm
		this.getter.call(vm, vm)
	}
	depend () {
		let i = this.deps.length
		while (i--) {
			this.deps[i].depend()
		}
	}
}
