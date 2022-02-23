import Head from "next/head";
import { Fragment } from "react";
import Hero from "../../components/home-page/hero";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const DummyData = [
    {
      slug: 'how-to-be-a-winner',
      title: 'How to be a master',
      image: 'IMG_0996.PNG',
      excerpt: 'How to be a savant in life is to take every task head on like a bull, but measure thrice, strike once',
      date: '2021-02-03'
    },
    {
      slug: 'how-to-be-a-winner2',
      title: 'How to be a master',
      image: 'IMG_0996.PNG',
      excerpt: 'How to be a savant in life is to take every task head on like a bull, but measure thrice, strike once',
      date: '2021-02-03'
    },
    {
      slug: 'how-to-be-a-winner3',
      title: 'How to be a master',
      image: 'IMG_0996.PNG',
      excerpt: 'How to be a savant in life is to take every task head on like a bull, but measure thrice, strike once',
      date: '2021-02-03'
    },
    {
      slug: 'how-to-be-a-winner4',
      title: 'How to be a master',
      image: 'IMG_0996.PNG',
      excerpt: 'How to be a savant in life is to take every task head on like a bull, but measure thrice, strike once',
      date: '2021-02-03'
    }
];


export default function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All My Posts</title>
                <meta 
                    name='description' 
                    content="All of my technology related posts" 
                />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    )
};

export function getStaticProps() {
    const getPosts = getAllPosts();
  
    return {
      props: {
        posts: getPosts
      }
    }
  }