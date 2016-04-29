

const getDisplayName = (authData) => {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'google':
       return authData.google.displayName;
     case 'facebook':
       return authData.facebook.displayName;
  }
};

const getAvatarUrl = (authData) => {
  switch(authData.provider) {
     case 'password':
       return '';
     case 'google':
       return authData.google.profileImageURL;
     case 'facebook':
       return authData.facebook.profileImageURL;
  }
};

export default {
  getDisplayName: getDisplayName,
  getAvatarUrl: getAvatarUrl
};
