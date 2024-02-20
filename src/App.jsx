import Layout from "./components/Layout/Layout.jsx";
import {useEffect, useRef, useState} from "react";
import {io} from "socket.io-client";

const App = () => {

    const socket = io('http://localhost:8080');


    useEffect(()=> {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('receive-message-from-server', (data) => {
            console.log(`Received message: ${data}`);
        });

        socket.emit('send-message-from-client', "Message from clint");

    },[]);


    return (
        <>
           <Layout>
           </Layout>
        </>
    );
};

export default App;