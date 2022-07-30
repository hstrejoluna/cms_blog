import Head from "next/head";

const posts = [
  {
    title: "Hello Next.js",
    excerpt: "This is my first post",
  },
  {
    title: "Hello Next.js2",
    excerpt: "This is my first post2",
  },
];

const Home = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>HS Trejo Luna Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div classNam
      </div>
    </div>
  );
};

export default Home;
