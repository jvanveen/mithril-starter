import m from 'mithril'

const state = {
    count: 0,
    users: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Charley'},
    ]
}

const stateHandler = {
    get: function(target, key) {
        if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], stateHandler)
          } else {
              return target[key]
          }
        return target
    },
    set: function(obj, prop, value) {
        obj[prop] = value
        m.redraw()
    }
};


export default new Proxy(state, stateHandler)