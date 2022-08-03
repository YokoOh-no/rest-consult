import Link from 'next/link'

const Navbar = () => {
    return ( 
    <nav>
        <div className="logo">
            <h1>Lipsum</h1>
        </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/apply-here"><a>Apply</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/staff"><a>Team Fork</a></Link>
            <Link href="/hr"><a>Human Resources</a></Link>

    </nav>

     );
}
 
export default Navbar;