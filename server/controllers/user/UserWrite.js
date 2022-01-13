require("dotenv").config();
const { user, post, freetalk } = require('../../models');
const { isAuthorized } = require('../tokenfunction');

module.exports = async (req, res) => {
  const authorization = isAuthorized(req);
  const userInfo = await user.findOne({
    where: {id: user.id}
  });
  
  if(!authorization) {
    res.status(401).send({message: 'Invalid token!'});
  } else {
    const postInfo = await post.findOne({
      where: {userId: userInfo.id}
    });
    const freetalkInfo = await freetalk.findOne({
      where: {userId: userInfo.id}
    });

    res.status(200).json({data: {picture: postInfo.picture, title: freetalkInfo.title}, message: 'Success find users data!'});
  }
};