import {useForm} from "@inertiajs/react";

export default function Create({name}){
    const {data, setData, post, processing, errors} = useForm({
        body: ""
    });

    function submit(e){
        e.preventDefault();
        post("/posts");
    }
    return<>
        <h1 className={"shadow-2xs text-center text-5xl font-semibold tracking-tight sm:text-7xl p-5"}>Create {name}</h1>

        <div className={"w-1/2 mx-auto"}>
            <form onSubmit={submit}>
                <textarea
                    name=""
                    id=""
                    value={data.body}
                    rows={10}
                    onChange={(e)=>setData("body", e.target.value)}
                    className={"mt-4 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 " +
                        "outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 " +
                        "focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" +
                        ` ${errors.body && "!outline-red-300"}`}
                ></textarea>
                {errors.body && <p className={"peer-invalid:visible text-red-700 font-bold"}>{errors.body}</p>}
                <button
                    className="mt-4 block w-full  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={processing}
                >Create Post
                </button>
            </form>
        </div>
    </>
}
