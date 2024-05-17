import Link from "next/link";
import { UnsplashImage } from "../models/unsplash-image"
import Image from "next/image";
import { Alert } from "../../components/bootstrap";


export const metadata = {
    title: "Dynamic image website",
    description: "Dynamic website using NextJS",
};

export const revalidate = 0


export default async function Dynamic() {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_ACCESS_KEY)
    const image = (await response.json()) as UnsplashImage

    const width = Math.min(image.width, 500)
    const height = (width / image.width) * image.height





    return (
        <main>
            <section>

                <Alert>
                    This page <strong>fetches data dynamically.</strong> Every time you refresh the website, you will get a new image.

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