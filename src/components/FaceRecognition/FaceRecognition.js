import React from "react"
import "./FaceRecognition.css"
// "https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg"

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box)
  return (
    <div className="center ma">
      <div className="mt2" style={{ position: "relative" }}>
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding_box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
            position: "absolute",
            boxShadow: "0 0 0 3px #149df2 inset",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  )
}

export default FaceRecognition
