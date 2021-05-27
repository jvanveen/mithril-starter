import m from 'mithril'

export default {
    view: function(vnode) {
        return [
            m('header',
                m(m.route.Link, {href: "/"}, "Home"),
                m(m.route.Link, {href: "/users"}, "Users"),
                m(m.route.Link, {href: "/products"}, "Products")
            ),
            m('article.view',
                vnode.children,
            ),
            m('footer', 'Footer')
        ]
    }

}