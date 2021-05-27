import m from 'mithril'

export default MainLayout = function() {
    return [
        m('header', 'Header'),
        m('.wrapper',
            m('aside', 'Aside'),
            m('article',
                m('p', 'Article'),
                m('button', {
                    onclick: function() {
                        global.app.state.count ++
                    }
                }, `Click me ${global.app.state.count}`),
            )
        ),
        m('footer', 'Footer')
    ]
}