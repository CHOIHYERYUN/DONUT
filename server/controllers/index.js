const LikeLplist = require('./lplist/LikeLplist');

module.exports = {
  Kakao: require('./user/Kakao'),
  KakaoCallback: require('./user/KakaoCallback'),
  UserInfo: require('./user/UserInfo'),
  SignOut: require('./user/SignOut'),
  AllPost: require('./post/AllPost'),
  DetailPost: require('./post/DetailPost'),
  CheckCookiePost: require('./post/CheckCookiePost'),
  AddPost: require('./post/AddPost'),
  PostModify: require('./post/PostModify'),
  DeletePost: require('./post/DeletePost'),
  AllFreetalk: require('./freetalk/AllFreetalk'),
  DetailFreetalk: require('./freetalk/DetailFreetalk'),
  CheckCookieFreetalk: require('./freetalk/CheckCookieFreetalk'),
  AddFreetalk: require('./freetalk/AddFreetalk'),
  FreetalkModify: require('./freetalk/FreetalkModify'),
  DeleteFreetalk: require('./freetalk/DeleteFreetalk'),
  AllLplist: require('./lplist/AllLplist'),
  DetailLplist: require('./lplist/DetailLplist'),
  AddFreetalkComment: require('./comment/AddFreetalkComment'),
  AddPostComment: require('./comment/AddPostComment'),

  LikeLplist: require('./lplist/LikeLplist'),
  AddLpPrice: require('./lplist/AddLpPrice')

  AddLplist: require('./lplist/AddLplist'),
  AddRecentPrice: require('./lplist/AddRecentPrice'),
  AuthLogin: require('./user/AuthLogin')

};