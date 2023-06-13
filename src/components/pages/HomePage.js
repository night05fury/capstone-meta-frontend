import React from "react";
import Header from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";

export default function HomePage() {
return(
    <>
        <Header />
        <main>
            <Specials />
            <Testimonials />
            <About />
        </main>
    </>
)
}