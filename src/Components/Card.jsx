import React, { useState } from 'react'

function Card() {
  const url2 = 'https://random.imagecdn.app/500/150'
  const url =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
  const [joke, setJoke] = useState('')
  const [img, setImg] = useState('')

  const jokeAPI = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))

    fetch(url2).then((res) => setImg(res.url))
  }
  function generateJoke() {
    jokeAPI()
  }
  return (
    <div className=" rounded-md  shadow-md flex  flex-col w-[500px] h-auto bg-teal-200 item-center">
      <div className="m-4">
        <img src={img} alt="" width="500px" height="500px" />
      </div>
      <div className=" m-4">
        <p>{joke}</p>
      </div>
      <div>
        <button
          className=" m-4 rounded-md  bg-yellow-300 p-3"
          onClick={generateJoke}
        >
          Generate New Joke
        </button>
      </div>
    </div>
  )
}

export default Card
