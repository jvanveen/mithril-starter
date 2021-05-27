import m from 'mithril'
import User from '/components/user'

export default {
    view: function() {
        return [
            m('div.users',
                m('h1', 'Users'),
                m('p', 'Just a list of users...'),
                app.state.users.map((user) => m(User, {user}))
            ),
        ]
    }
}