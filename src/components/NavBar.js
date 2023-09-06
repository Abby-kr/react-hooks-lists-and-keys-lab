import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // const linksList = links.map((link) => {
  //   return <a href={link} key={link} >{link}</a>
  // })

  return (
    <nav> 
    {links.map((link) => {
    return <a key={link} href={`#${link}`} >{link}</a>
    })}
   </nav>
  )
  
}

export default NavBar;
