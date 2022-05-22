import Hero from "./Hero";
import Enemy from "./Enemy";
import ImagePaths from "./ImagePaths";

const Arena = () => {
    return (
        <div>
            <Hero name="Baki" imagePath={ImagePaths[0]}/>
            <Enemy name="Yujiro" imagePath={ImagePaths[1]}/>
        </div>
    )
}

export default Arena