export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '00de26eea06a3d8bcdb3fe4b0e26de4d'),
  },
});
