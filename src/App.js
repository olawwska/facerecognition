import { useState } from "react"
import "./App.css"
import Navigation from "./components/Navigation/Navigation"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"
import SignIn from "./components/SignIn/SignIn"
import Rank from "./components/Rank/Rank"
import React from "react"
import Clarifai from "clarifai"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import Particles from "react-tsparticles"

const app = new Clarifai.App({
  apiKey: "5aa688a3272e4faba850af80fc68fbe6",
})

function App() {
  const [input, setInput] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [faceBox, setFaceBox] = useState({})

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const calculateFaceLocation = (data) => {
    const faceImage = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)

    return {
      leftCol: faceImage.left_col * width,
      topRow: faceImage.top_row * height,
      rightCol: width - faceImage.right_col * width,
      bottomRow: height - faceImage.bottom_row * height,
    }
  }

  const displayFaceBox = (box) => {
    setFaceBox(box)
  }

  const onSubmit = () => {
    setImageUrl(input)
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <Navigation />
      <SignIn />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition imageUrl={imageUrl} box={faceBox} />
    </div>
  )
}

export default App
