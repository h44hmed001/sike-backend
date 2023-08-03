module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });



 // bdb88fa757d343e6136676ad3036581bb57400a52e02f4edbdd49734cef7c43c1397b41b8e47314d5f35decd84b6bb193f85720d7400a62f5c1549b0d70b8b967792ce0a1badf4dc8f7ac88f86b6d5e9a9c6fb5bc3f2c0688f6520814fb66b4951920edc2c455a65fe5397756535efcf621f519a33a054d78b8dabe063bd42d4