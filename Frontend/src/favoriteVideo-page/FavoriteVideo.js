import { useSelector } from "react-redux";
import "./FavoriteVideo.scss";
import MobileNav from "../component/nav/MobileNav";
const FavoriteVideo = () => {
  const selectedVideo = useSelector((state) => state.selectedVideos);
  console.log(selectedVideo);

  return (
    <>
      <MobileNav />
      <div className="favotite__container">
        <h1 className="favotite__container-title">Ulubione Video</h1>
        <div className="favotite__container-margin">
          {selectedVideo.map((item) => {
            return (
              <div>
                <h2>{item.title}</h2>
                <div className="favotite__container-description">
                  <img src={item.src} alt="tytuł"></img>
                  <span className="favotite__container-description-span">
                    {item.descriptions}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FavoriteVideo;
