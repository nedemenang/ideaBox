import Ideas from '../controllers/Ideas';

module.exports = (app) => {
  app.post('/ideas', (req, res) => {
    Ideas.create(req, res);
  });

  app.post('/ideas/:ideaId/vote', (req, res) => {
    Ideas.vote(req, res);
  });

  app.post('/ideas/:ideaId/comment', (req, res) => {
    Ideas.addComment(req, res);
  });

  app.post('/ideas/:ideaId', (req, res) => {
    Ideas.edit(req, res);
  });

  app.get('/ideas/:ideaId/', (req, res) => {
    Ideas.getIdeaByIdeaId(req, res);
  });

  app.get('/ideas', (req, res) => {
    Ideas.getGroups(req, res);
  });

  app.get('/ideas/:ideaId/comments', (req, res) => {
    Ideas.getIdeaComments(req, res);
  });

  app.get('/ideas/:ideaId/votes', (req, res) => {
    Ideas.getIdeaVotes(req, res);
  });
};
