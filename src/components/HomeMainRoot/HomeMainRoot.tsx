import HomeMainPC from "./HomeMainPC/HomeMainPC";
import HomeMainMobile from "./HomeMainMobile/HomeMainMobile";

function HomeMainRoot() {
    return (
        <>
             <HomeMainMobile />
             <HomeMainPC />
        </>
    )
}

export default HomeMainRoot;