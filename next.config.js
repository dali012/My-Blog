/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = withContentlayer({ ...nextConfig });
