export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e6ec61e452055dfe57e6c03de19a5ab'),
  },
});
