import { useState } from "react"


export function GalleryCareer() {
    const [image, setImage] = useState("")
    const showImageContainer = document.querySelector(".popout-image")
    const imgSrc = [
        "https://breezy-gallery.imgix.net/95ba4/Group%20361.png",
        "https://breezy-gallery.imgix.net/6a315/Group%20363.png",
        "https://breezy-gallery.imgix.net/9b363/Group%20360.png",
        "https://breezy-gallery.imgix.net/54286/Group%20367.png",
        "https://breezy-gallery.imgix.net/c13e2/Group%20364.png",
        "https://breezy-gallery.imgix.net/f3b7d/Group%20365.png",
    ]

    function handleImage(event) {
        setImage(event.target.src)
        showImageContainer.style.display = "grid";
    }

    function closeImage() {
        showImageContainer.style.display = "none";
    }

    return (
        <>
            <div className="gallery">
                {imgSrc.map((src ,index) => 
                    <div key={src + index} className="image">
                        <img
                            onClick={handleImage}
                            src={src}
                            alt="Group image" />
                    </div>
                )}
            </div>

            <div onClick={closeImage} className="popout-image">
                <span onClick={closeImage} id="close">&times;</span>
                <img id="popImage" src={image} alt="somethign went wrong" />
            </div>
        </>
    )
}