import m from 'mithril'
import Layout from './components/layout'
import Users from './components/users'
import state from './state'

if (module.hot) {
    module.hot.accept()
}


class App {
    constructor() {
        this.state = state
        this.vm = m
    }

    initVm() {
        const App = {
            view: function() {
                return [
                    Layout(),
                    Users()
                ]
            }
        }

        m.mount(document.body, App)
    }
}

global.app = new App()
global.app.initVm()
