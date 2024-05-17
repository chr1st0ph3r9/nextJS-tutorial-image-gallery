import Link from "next/link";
import { UnsplashImage } from "../models/unsplash-image"
import Image from "next/image";
import { Alert } from "../../components/bootstrap";


export const metadata = {
    title: "Static image website",
    description: "static website using NextJS",
};


export default async function Static() {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_ACCESS_KEY)
    const image = (await response.json()) as UnsplashImage

    const width = Math.min(image.width, 500)
    const height = (width / image.width) * image.height





    return (
        <main>
            <section>

                <Alert>
                    <strong>This page caches and fetches data at buildtime.</strong> Even though the Unsplash API always return a new image , we see the same image after refreshing the page until recompile or cache is deleted.

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