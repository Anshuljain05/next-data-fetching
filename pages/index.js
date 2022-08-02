import Link from "next/link";

const Home = () => {
  return ( 
    <ul>
      <li><Link href='/csr'>Client Side Rendered</Link></li>
      <li><Link href='/ssr'>Server Side Rendered</Link></li>
      <li><Link href='/ssg'>Static Site Generation</Link></li>
      <li><Link href='/isr'>Incremental Static Regeneration</Link></li>
    </ul>
   );
}
 
export default Home;