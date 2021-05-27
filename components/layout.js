import m from 'mithril'

export default {
    view: function(vnode) {
        return [
            m('header',
                m(m.route.Link, {href: "/"}, "Home"),
                m(m.route.Link, {href: "/users"}, "Users"),
                m(m.route.Link, {href: "/products"}, "Products")
            ),
            m('.wrapper',
                m('aside', 'Aside'),
                m('article.view',
                    vnode.children, // e.g. the view
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

}