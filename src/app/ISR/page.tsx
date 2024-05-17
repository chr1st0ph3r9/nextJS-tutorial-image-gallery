import Link from "next/link";
import { UnsplashImage } from "../models/unsplash-image"
import Image from "next/image";
import { Alert } from "../../components/bootstrap";


export const metadata = {
    title: "Incremental Static Regeneration image website",
    description: "Incremental Static Regeneration website using NextJS",
};

export const revalidate = 15;

export default async function Static() {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_ACCESS_KEY)
    const image = (await response.json()) as UnsplashImage

    const width = Math.min(image.width, 500)
    const height = (width / image.width) * image.height





    return (
        <main>
            <section>

                <Alert>
                    This page uses <strong>Incremental Static Regeneration.</strong> A new image is fetched when refresh after 15 seconds(and then used from the cache for 15 seconds).

                </Alert>
                <h2>Static</h2>
                <Image
                    src={image.urls.raw}
                    alt={image.description}
                    width={width}
                    height={height}
                />
                <p>By</p>
                <Link rel="stylesheet" href={`/user/${image.user.username}`} >{image.user.username} </Link>
            </section>
        </main>
    );



}