/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add your custom configuration options here
    // For example:

    // Specify a custom path for your public directory
    // publicRuntimeConfig: {
    //   myCustomValue: 'Hello, World!',
    // },

    // Configure environment variables
    // env: {
    //   MY_ENV_VARIABLE: 'my-env-value',
    // },

    // Add custom webpack configuration
    // webpack: (config, options) => {
    //   // Add your custom webpack configuration here
    //   return config;
    // },

    // Add headers to HTTP responses
    async headers() {
        return [
            {
                source: '/path/to/resource',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=604800, must-revalidate',
                    },
                ],
            },
        ];
    },

    // Add custom redirects
    // async redirects() {
    //   return [
    //     {
    //       source: '/old-path',
    //       destination: '/new-path',
    //       permanent: true, // or false for temporary redirect
    //     },
    //   ];
    // },

    // Add custom rewrites
    // async rewrites() {
    //   return [
    //     {
    //       source: '/custom-path',
    //       destination: '/another-path',
    //     },
    //   ];
    // },
};

module.exports = nextConfig;
