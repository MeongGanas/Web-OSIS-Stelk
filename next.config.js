module.exports = {
  async redirects() {
    return [
      {
        source: "/pengurus/:name",
        has: [
          {
            type: "query",
            key: "name",
            value: "inti-osis",
          },
        ],
        destination: "/pengurus/inti-osis",
        permanent: false,
      },
    ];
  },
};
