import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
// import Layout from "@/Layouts/Layout.jsx";
import Layout from "./Layouts/Layout.jsx";

// createInertiaApp({
//     resolve: async (name) => {
//         const pages = import.meta.glob('./Pages/**/*.jsx')
//         const page = await pages[`./Pages/${name}.jsx`]()
//         return page.default
//     },
//     setup({ el, App, props }) {
//         createRoot(el).render(<App {...props} />)
//     },
// })

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
        const page = await pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || ((page) => <Layout children={page}/>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        delay: 250,
        color: "#fff",
        includeCSS: true,
        showSpinner: true,
    }
})
