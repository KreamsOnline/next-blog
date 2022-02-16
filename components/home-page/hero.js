import Image from 'next/image';
import { Link } from 'react-router-dom';

import classes from './hero.module.css';

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/DSlogo.png"
                    alt="Logo for website"
                    height={300}
                    width={300}
                />
            </div>
            <ul className={classes.ul}>
                <li><a href="#">Home</a> </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="/posts">All Posts</a></li>
            </ul>
        </section>
    )
}