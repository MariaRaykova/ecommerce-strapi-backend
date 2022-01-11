module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-35-171-57-132.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dce1d09j18t4u0'),
      user: env('DATABASE_USERNAME', 'ygtkjsxyaywnzf'),
      password: env('DATABASE_PASSWORD', 'c7bb5354a94ae93affdd912b66396e31c37518e7091e9b581408c0d9a12abc2f'),
      ssl: { rejectUnauthorized: false },
    },
  },
});

