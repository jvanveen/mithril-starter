import m from 'mithril'

export default {
    view: function() {
        return [
            m('div.home',
                m('h1', 'Home'),
                m('p', 'This is a Mithril starter site')
            ),
        ]
    }
}