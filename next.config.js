const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  future: {
    webpack5: true
  },
  assetPrefix: isProd ? '/react-state-management' : '',
};
