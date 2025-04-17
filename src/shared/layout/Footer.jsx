import { Children, useRef } from "react";

export default function Footer({ children }) {
    const year = useRef(
        (() => {
            const now = new Date(Date.now());
            return now.getFullYear();
        })(),
    );
    return (
        <footer>
            <p>&copy; {year.current} Emiri Sato</p>
            <a href="https://codethedream.org/">CTD</a>
        </footer>
    );
}