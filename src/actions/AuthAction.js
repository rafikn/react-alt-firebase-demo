import alt from '../alt';
import Firebase from 'firebase';

class AuthAction {

  login(args) {
    return (dispatch) => {
      // login logic

      var firebaseRef = new Firebase('https://whybuy.firebaseio.com');
      firebaseRef.authWithOAuthPopup("google", (error, user) => {
        console.log('hello firebase');

        if (error) {
          return;
        }

        dispatch(user);
      })
    };
  }

}

export default alt.createActions(AuthAction);
