import Layout from "../Layouts/Layout.jsx";
import {Link} from "@inertiajs/react";

export default function Home({name}) {
    return <>
        <h1 className={"shadow-2xs"}>Home {name}</h1>
        <Link
            href={"/"}
            className={"block title mt-[1000px] text-center text-5xl font-semibold tracking-tight sm:text-7xl"}
            preserveScroll
        >
            {new Date().toLocaleTimeString()}
        </Link>
    </>
}
//
// Home.layout = page => <Layout children={page}/>
//
// export default Home;
