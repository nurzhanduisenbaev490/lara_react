import {useForm} from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

export default function Show({name, post}){
    const {delete:destroy} = useForm();
    const route = useRoute();
    function submit(e){
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', post));
    }
    return<>
        <div key={post.id} className={"p-4 border"}>
            <div className={"text-sm text-slate-600"}>
                <span>Posted on: </span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className={"font-medium"}>{post.body}</p>
            <div className={"flex items-center justify-end gap-2"}>
                <form onSubmit={submit}>
                    <button className={"rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>Delete</button>
                </form>
            </div>
        </div>
    </>
}
