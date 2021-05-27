import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const firstPost = () => {
  return (
    <>
      <Layout>

        <Head>
          <title>First Post</title>
        </Head>
        <Image
          src='/images/profile.jpg'
          height={144}
          width={144}
          alt="Rand pic"
        />
        <h1 className="tag">First Post</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>

        {/* <style jsx>{`
         .tag {
            background: red;
         }
      `}</style> */}
      </Layout>
    </>
  );
};

export default firstPost;
