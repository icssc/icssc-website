import { useEffect } from "react";

export default function Custom404() {
    
    useEffect(() => {
        // If the path doesn't exist yet, redirect to the old html files
        if (!window.location.pathname.endsWith('.html')){
            window.location.replace(window.location.pathname + ".html");
        }
    })
    
    return <h1>Not Found</h1>
}