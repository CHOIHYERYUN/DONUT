require('dotenv').config();
const { freetalk } = require('../../models');
const { isAuthorized } = require('../tokenfunction');

module.exports = (req, res) => {
  const authorization = isAuthorized(req);

  if(!authorization) {
    res.status(401).send({message: 'Invalid token!'});
  } else {
    // delete 메소드 사용(client)
    // destroy(sequelize method)
    // 같은 제목이 있을 수 있으므로 id로 변경(freetalk의 고유 id임)
    freetalk.destroy({where: {id: req.body.id}});

    res.status(201).json({message: 'Delete Success!'});
  }
};