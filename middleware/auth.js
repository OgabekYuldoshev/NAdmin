export default function ({ app, redirect }) {
    if (app.$auth.loggedIn) {
      return redirect(app.localePath({ name: 'index' }))
    }
  }