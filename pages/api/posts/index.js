export default async function get_post(req, res) {
  const response = await fetch(`${process.env.api_wp}/posts`);
  const data = await response.json();
  res.status(200).json({ data: data });
}
