// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.sproutsocial.com',
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' }, // ← এটা
      { protocol: 'https', hostname: 'media.sproutsocial.com' },
      { protocol: 'https', hostname: 'i.ibb.co' }, // imgbb ব্যবহার করলে
    ],
  },
};

export default nextConfig;
