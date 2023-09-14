const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});

module.exports = withPWA({
  reactStrictMode: true,
  // Your other Next.js configurations go here.
});
