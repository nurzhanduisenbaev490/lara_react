import Layout from "../Layouts/Layout.jsx";

export default function Home({name}) {
    return <>
        <h1 className={"shadow-2xs"}>Home {name}</h1>
    </>
}
//
// Home.layout = page => <Layout children={page}/>
//
// export default Home;
