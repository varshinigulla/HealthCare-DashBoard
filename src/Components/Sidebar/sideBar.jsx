import "./sideBar.css"
import { general } from "../data/navigationlinks";
import {tools} from "../data/navigationlinks";
import { setting } from "../data/navigationlinks";
import { useState } from "react";
export const Sidebar = () => {

  const [links,setLink] =useState(1);

  return(
    <aside>
    <div className="sidebar">
      <h4>General</h4>
      <ul>
        {general.map(link => (
          <li key={link.id} className={links===link.id ? "navlink active" : "navlink"} onclick={() => setLink(link.id)}><span className="link-icon">{link.icon}</span> <span>{link.title}</span></li>
        ))}
      </ul>
    </div>
    <div className="sidebar">
      <h4>Tools</h4>
      <ul>
        {tools.map(link => (
          <li key={link.id}  className={links===link.id ? "navlink active" : "navlink"} onclick={() => setLink(link.id)}><span className="link-icon">{link.icon}</span> <span>{link.title}</span></li>
        ))}
      </ul>
    </div>
    <ul className="setting">
      {setting.map(link => (
        <li key={link.id}  className={links===link.id ? "navlink active" : "navlink"} onclick={() => setLink(link.id)}><span className="link-icon">{link.icon}</span> <span>{link.title}</span></li>
      ))}
    </ul>
  </aside>
  )
}