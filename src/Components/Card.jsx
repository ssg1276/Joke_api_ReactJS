import React, { useState } from 'react'

function Card() {
  const url2 = 'https://source.unsplash.com/random/'
  const url =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
  const [joke, setJoke] = useState('')
  const [img, setImg] = useState('')
  const [category, setCategory] = useState('')
  const [showMain, setShowMain] = useState(false)

  const jokeAPI = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke)
        setCategory(data.category)
      })

    fetch(url2)
      // .then((res) => res.json())
      .then((data) => setImg(data.url))
      .catch((error) => console.error('Error fetching image:', error))
  }

  function generateJoke() {
    jokeAPI()
  }

  function startNow() {
    jokeAPI()
    setShowMain(true)
  }

  return (
    <>
      <div className={!showMain ? 'btn' : 'btn hidden'}>
        <button
          className="text-black font-extrabold  bg-orange-600  shadow-slate-200 shadow-md p-4 rounded-md hover:"
          onClick={startNow}
        >
          START
        </button>
      </div>
      <div
        className={
          showMain
            ? 'main rounded-md shadow-red-600 flex flex-col w-[500px] h-auto bg-teal-200 item-center'
            : 'main hidden'
        }
      >
        <div className="m-4 justify-center flex">
          <img src={img} alt="" width="150px" height="150px" />
        </div>

        <div className=" m-4">
          <p className=" text-black text-xl uppercase font-bold">{category}:</p>
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
    </>
  )
}

export default Card
