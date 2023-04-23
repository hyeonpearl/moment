/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: `/api/weather?lat=${lat}&lon=${lon}`,
  //       destination: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
