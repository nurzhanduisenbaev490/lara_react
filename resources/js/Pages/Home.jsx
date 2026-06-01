import Layout from "../Layouts/Layout.jsx";
import {Link} from "@inertiajs/react";

export default function Home({name, posts}) {
    console.log(posts);
    return <>
        <h1 className={"shadow-2xs text-center text-5xl font-semibold tracking-tight sm:text-7xl p-5"}>Home {name}</h1>

        <div>
            {posts.map(post => (
                <div key={post.id} className={"p-4 border"}>
                    <div className={"text-sm text-slate-600"}>
                        <span>Posted on: </span>
                        <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                    </div>
                    <p className={"font-medium"}>{post.body}</p>
                </div>
            ))}
        </div>

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
