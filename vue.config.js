module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ec_secret'
    : '/',
};
