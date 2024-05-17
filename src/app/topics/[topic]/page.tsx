import { UnsplashImage } from "../../models/unsplash-image"
import Image from "next/image";
import styles from "./topicPage.module.css";
import Link from "next/link";



interface pageProps {
    params: {
        topic: string
    }
}

export function generateStaticParams() {

    return ["plates", "sweets", "swords"].map((topic) => ({
        topic

    }));
}


export default async function Page({ params: { topic } }: pageProps) {

    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)

    const images: UnsplashImage[] = await response.json()
    console.log(`el topic es: ${topic}`)



    return (

        <section>
            <h2>el topic es: {topic}</h2>

            {images.map((image) => (
                <div key={image.id}>

                    <Image
                        src={image.urls.raw}
                        alt={`imagen de ${image.description}`}
                        width={250}
                        height={250}
                        className={styles.image}
                    />
                    By
                    <Link rel="stylesheet" href={`/user/${image.user.username}`} className={styles.link} >{image.user.username} </Link>
                </div>
            ))}

        </section>


    )



}