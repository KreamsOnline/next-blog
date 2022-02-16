import { Fragment } from "react";
import Hero from "../../components/home-page/hero";
import AllPosts from "../../components/posts/all-posts";

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


export default function AllPostsPage() {
    return (
        <Fragment>
            <AllPosts posts={DummyData} />
        </Fragment>
    )
};