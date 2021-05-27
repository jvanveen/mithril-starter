import m from 'mithril'
// @ts-ignore
m.Fragment = { view: vnode => vnode.children }

import router from './router'
import state from './state'

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}

class App {
    state: any
    vm: any
    router: void
    constructor() {
        this.state = state
        this.vm = m
    }

    initVm() {
        this.router = router()
    }
}

globalThis.app = new App()
globalThis.app.initVm()
