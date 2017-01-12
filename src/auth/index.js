import Vue from 'vue'
import router from '../router'

const SIGNIN_URL = 'Your login URL'
const SIGNUP_URL = 'Your register URL'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },
  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    context.$http.post(SIGNIN_URL, creds, {
      headers: {
        // this Authorization
      }
    }).then((res) => {
      // response success
    }, (res) => {
      // response error
    })
  },
  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, {
      headers: {
        // this Authorization
      }
    }).then((res) => {
      // response success
    }, (res) => {
      // response error
    })
  },
  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('token')
    this.user.authenticated = false
  },
  checkAuth () {
    const inBrowser = typeof localStorage !== 'undefined'
    if (inBrowser) {
      var check = localStorage.getItem('token')
    }
    var jwt = false
    if(check !== null) {
      jwt = true
    } else {
      jwt = false
    }
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },
  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
}
