module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d433c022677af207b0b5e4e3fbe5b83'),
  },
});
