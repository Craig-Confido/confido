import { createBucketClient } from '@cosmicjs/sdk';
const bucket = createBucketClient({
  bucketSlug: 'confido',
  readKey: 'OrYlRGLrDpOrxqbRXMMw7gd7OzEL6jZCqHvfwJrhUbB0Q1Khcj',
});

async function getBlogs() {
  const data = await bucket.objects.find({
    type: 'posts',
  });
  const blogs = await data.objects;
  return blogs;
}

export default { getBlogs };
