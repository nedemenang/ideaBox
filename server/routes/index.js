import userRoutes from './users';
import ideaRoutes from './ideas';

module.exports = (app) => {
  // USER API ENDPOINTS
  userRoutes(app);
  // GROUP API ENDPOINTS
  ideaRoutes(app);
};