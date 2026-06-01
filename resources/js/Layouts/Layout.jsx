import {Link} from "@inertiajs/react";

export default function Layout({children}){
    return(
        <>
            <header>
                <nav className={"relative bg-gray-800"}>
                    <Link className={"nav-link text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} href={"/"}>
                        Home
                    </Link>
                    <Link className={"nav-link text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} href={"/create"}>
                        Create
                    </Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
