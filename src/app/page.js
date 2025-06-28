"use client"
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import Top from "./components/Top";
import Navbar  from "./components/Navbar";
import Card from "./components/Card";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import Page from "./pages/products/[id]/page";
import Map from "./components/GoogleLocation";
import Services from "./components/Services";
import Loader from './components/Loader';

export default function Home() {
  // const { isSignedIn } = useUser();

  return (
    <>


    <Loader />
      <Top/>
      <Navbar/>
      
      <Main/>
      <Card/>
      <Services/>
      <Map/>
      <Footer/>
      {/* <Page/> */}


      {/* <h1>Welcome to Next.js + Clerk + MongoDB</h1> */}
      {/* {isSignedIn ? (
        <>
          <p>You are logged in!</p>
          <UserButton />
          <br />
          <Link href="/dashboard">
            <button style={{ marginTop: "10px" }}>Go to Dashboard</button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/sign-in">
            <button style={{ marginRight: "10px" }}>Sign In</button>
          </Link>
          <Link href="/sign-up">
            <button>Sign Up</button>
          </Link>
        </>
      )} */}
    
    </>
    
  );
}
