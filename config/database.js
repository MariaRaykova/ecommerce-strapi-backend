module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-31-219-113.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ddour9nbhmedla'),
      user: env('DATABASE_USERNAME', 'zmhmheblfalhzr'),
      password: env('DATABASE_PASSWORD', '8dcb00f3894ee082a53317cd29702f4f0c18a0e524d8123f22f0bbd923bde359'),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)},
    },
  },
});
