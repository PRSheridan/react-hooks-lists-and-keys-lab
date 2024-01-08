import React from "react";


//better to create a seperate function, or use what is given? 

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkElements = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })
  return <nav>{linkElements}</nav>;
}

export default NavBar;
