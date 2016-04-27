import alt from '../alt';
import Firebase from 'firebase';

class AuthAction {

  loginWithEmail(args) {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://whybuy.firebaseio.com');
      firebaseRef.authWithOAuthPopup("google", (error, user) => {
        if (error) {
          console.log("Login Failed!", error);
          return;
        }
        dispatch(user);
      })
    };
  }

  loginWithFacebook(args) {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://whybuy.firebaseio.com');
      firebaseRef.authWithOAuthPopup("facebook", (error, user) => {
        if (error) {
          console.log("Login with Facebook Failed!", error);
          return;
        }
        dispatch(user);
      })
    };
  }

  loginWithGoogle(args) {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://whybuy.firebaseio.com');
      firebaseRef.authWithOAuthPopup("google", (error, user) => {
        if (error) {
          console.log("Login with Google Failed!", error);
          return;
        }
        dispatch(user);
      })
    };
  }

}

export default alt.createActions(AuthAction);
