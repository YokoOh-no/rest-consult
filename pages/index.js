import Head from 'next/head'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (<div>
        
        <h1>Homepage</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu. Est placerat in egestas erat imperdiet sed. Euismod </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu. Est placerat in egestas erat imperdiet sed. Euismod </p>
        <Link href="/apply-here"><a>Apply Here Now</a></Link>
                 
            </div>);
}