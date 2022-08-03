import {useSession, signIn, signOut } from "next-auth/client"; 
import Head from 'next/head'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link";



export default function Home() {
    const [session, loading]= useSession();
    if (session) {
    return (
        <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign Out</button>

        </>
    );
    }}
    