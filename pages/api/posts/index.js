async function getListPosts(itemPosts) {
  setLoading(true);
  const response = await fetch(
    `${process.env.api_wp}/posts?per_page=${itemPosts}&_embed`
  );
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const response = await fetch(
    `${process.env.api_wp}/posts?per_page=${itemPosts}&_embed`
  );
  const responseJSON = await response.json();

  res.status(200).json(responseJSON);
}
