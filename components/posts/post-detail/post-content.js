import PostHeader from "./post-header";
import Image from "next/image";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const dummyData = {
    slug: 'how-to-be-a-winner3',
    title: 'How to be a master',
    image: 'IMG_0996.PNG',
    date: '2021-02-03',
    content: '# This is a first post'
  }

export default function PostContent(props) {
    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        // image(image) {
        //     return (
        //         <Image 
        //                 src={`/images/posts/${post.slug}/${image.src}`}
        //                 alt={image.alt}
        //                 width={600}
        //                 height={300}    
        //         /> 
        //     )
        // },
        p(paragraph) {
            const { node } = paragraph;
      
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
        
                return (
                <div className={classes.image}>
                    <Image
                    src={`/images/posts/${post.slug}/${post.image}`}
                    alt={image.alt}
                    width={600}
                    height={400}
                    />
                </div>
                );
            }
        
            return <p>{paragraph.children}</p>;
        },
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}