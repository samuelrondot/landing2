/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path((?!fr).*)', // regex to exclude /fr and anything starting with /fr/
        destination: '/en/:path*',
       
      },
    ];
  },
    images: {
      domains: ["avatars.githubusercontent.com", "images.unsplash.com", "useartemis.co", "useartemis.s3.us-west-2.amazonaws.com"],
    },
   
  }

module.exports = nextConfig

