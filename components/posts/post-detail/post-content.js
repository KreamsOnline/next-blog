const dummyData = {
    slug: 'how-to-be-a-winner3',
    title: 'How to be a master',
    image: 'IMG_0996.PNG',
    date: '2021-02-03',
    content: '# This is a first post'
  }

export default function PostContent() {
    const imagePath = `/image/posts/${dummyData.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={dummyData.title} image={imagePath} />
            {dummyData.content}
        </article>
    )
}