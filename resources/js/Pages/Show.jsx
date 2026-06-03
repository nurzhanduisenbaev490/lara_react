import {Link} from "@inertiajs/react";

export default function Show({name, post}){
    return<>
        <div key={post.id} className={"p-4 border"}>
            <div className={"text-sm text-slate-600"}>
                <span>Posted on: </span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className={"font-medium"}>{post.body}</p>
        </div>
    </>
}
