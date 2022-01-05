require('dotenv').config();
const { freetalk } = require('../../models');
const { isAuthorized } = require('../tokenfunction');

module.exports = async (req, res) => {
  // 프리톡 작성 내용 수정 article
  // patch
  console.log(req.body);
  const authorization = isAuthorized(req);
  const freetalkInfo = await freetalk.findOne({
    where: {title: freetalk.title}
  });

  if(!authorization) {
    res.status(401).send({message: 'Invalid token!'});
  } else {
    freetalk.update({article: req.body.article}, {where: {title: freetalkInfo.title}});

    res.status(201).json({message: 'Done!'});
  }
};