import { useEffect } from "react";

export default function WebSocketComponent() {
    useEffect(() => {
        const socket = new WebSocket('ws://sockets//example.com/socket');

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };
        return () => {
            console.log('Cleanup - Closing WebSocket connection');
            socket.close()
        }
    }, []);


}