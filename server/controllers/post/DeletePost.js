require('dotenv').config();
const { post } = require('../../models');
const { isAuthorized } = require('../tokenfunction');

module.exports = (req, res) => {
  const authorization = isAuthorized(req);

  if(!authorization) {
    res.status(401).send({message: 'Invalid token!'});
  } else {
    // delete 메소드 사용(client)
    // destroy(sequelize method)
    //await post.destroy({where: post_id});
    post.destroy({where: {id: req.body.id}});

    res.status(201).json({message: 'Delete Success!'});
  }
};