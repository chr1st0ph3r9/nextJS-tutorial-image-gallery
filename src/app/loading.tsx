import { Spinner } from "../components/bootstrap";


export default function Loading() {
    return (
        <main>
            <section>
                <Spinner animation="grow" />
            </section>
        </main>
    );
}