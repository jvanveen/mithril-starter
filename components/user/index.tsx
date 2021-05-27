import m from 'mithril'

export default {
    delUser(user) {
        const users = globalThis.app.state.users
        users.splice(users.findIndex((u) => u.id === user.id), 1)
    },
    view: function(vnode) {
        return (
            <div class="c-user">
                {vnode.attrs.user.name}
                <button onclick={this.delUser.bind(this, vnode.attrs.user)}>
                    Delete user
                </button>
            </div>
        )
    }
}
