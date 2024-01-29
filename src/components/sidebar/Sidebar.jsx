import "./sidebar.css"
import {RssFeed} from "@material-ui/icons"
import {Chat} from "@material-ui/icons"
import {PlayCircleFilled} from "@material-ui/icons"
import {Group} from "@material-ui/icons"
import {Bookmark} from "@material-ui/icons"
import {HelpOutline} from "@material-ui/icons"
import {WorkOutline} from "@material-ui/icons"
import {Event} from "@material-ui/icons"
import {School} from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

export default function Side() {
  return (
    <div className="sidebar" >
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr />
        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
