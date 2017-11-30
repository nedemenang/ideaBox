import Users from '../controllers/Users';

module.exports = (app, firebase, io) => {
  app.post('/users/signin', (req, res) => {
    Users.signIn(req, res);
  });

  app.post('/users/passwordReset', (req, res) => {
    Users.resetPassword(req, res);
  });

  app.post('/users/confirmPasswordReset', (req, res) => {
    Users.confirmPasswordReset(req, res);
  });

  app.post('/users/googleSignin', (req, res) => {
    Users.googleSignin(req, res);
  });

  app.post('/users/signout', (req, res) => {
    Users.signOut(req, res);
  });

  app.post('/users/signup', (req, res) => {
    Users.signUp(req, res);
  });

  app.post('/users/updateUserProfile', (req, res) => {
    Users.updateUserProfile(req, res);
  });

  app.get('/user/:userId/idea/:ideaId', (req, res) => {
    Users.getUserIdea(req, res);
  });

  app.get('/user/:userId/idea', (req, res) => {
    Users.getUserIdeas(req, res);
  });
};
