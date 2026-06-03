import Layout from "../Layouts/Layout.jsx";
import {Link} from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

export default function Home({name, posts}) {
    const route = useRoute();
    // console.log(posts);
    return <>
        <h1 className={"shadow-2xs text-center text-5xl font-semibold tracking-tight sm:text-7xl p-5"}>Home {name}</h1>

        <div>
            {posts.data.map(post => (
                <div key={post.id} className={"p-4 border"}>
                    <div className={"text-sm text-slate-600"}>
                        <span>Posted on: </span>
                        <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                    </div>
                    <p className={"font-medium"}>{post.body}</p>
                    {/*<Link href={`/posts/${post.id}`} className={"text-blue-700"}>Read more...</Link>*/}
                    <Link href={route('posts.show', post)} className={"text-blue-700"}>Read more...</Link>
                </div>
            ))}
        </div>
        <div className={"py-12 px-4"}>
            {posts.links.map((link) => (
                // <a key={link.label} href={link.url}>{link.label}</a>
                link.url ?
                    (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                        />
                    )
                    :
                    (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className={`p-1 mx-1 text-slate-300`}
                        >

                    </span>
                    )
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
