import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
// import Topbar from "C:/Users/syarla3/Desktop/react-social/src/components/topbar/Topbar";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
          <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
          <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Safak kocaoglu</h4>
            <span className="profileInfoDesc">Hello my friends</span>
          </div>
        </div>
        <div className="profileRightBottom">
      <Feed/>
      <Rightbar profile/>
      </div>
      </div>
    </div>
    </>
  )
}
