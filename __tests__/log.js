'use strict';
  describe("Test log function ", () => {
    it('arguments destructuring', async () => {
        const logMiddleWare =  require('../controllers/log.js');
        console.log(logMiddleWare);
      });
  });