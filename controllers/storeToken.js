const storeTokenMiddleware = (req, res, next) => {
      const { Token } = res.locals; // Extract the token from res.locals
  
      if (Token) {
          // Set the token in localStorage
          res.setHeader('Set-Cookie', `token=${Token}; HttpOnly; Path=/`);
      }
  
      next();
  };
  
  module.exports = storeTokenMiddleware;
  