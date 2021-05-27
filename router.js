import m from 'mithril'
import Users from './components/views/users'
import Home from './components/views/home'
// Test legacy LiveScript
import Products from './components/views/products.ls'
import Layout from './components/layout'

export default function() {
    m.route.prefix = ''
    m.route(document.body, "/", {
        "/": {view: () => m(Layout, m(Home))},
        "/users": {view: () => m(Layout, m(Users))},
        "/products": {view: () => m(Layout, m(Products))}
    })
}