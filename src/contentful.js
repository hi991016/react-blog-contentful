const client = require("contentful").createClient({
  space: "zg68alt45u1s",
  accessToken: "MtWBFCBcOd-yxXuIpn4w6PdgsNdgw5ZgF3jcFOZjdco",
});

const getBlogPosts = () =>
  client.getEntries().then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      "fields.blogSlug": slug,
      content_type: "blog",
      // locale: "ja-JP",
      // locate: "en-US",
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost };
