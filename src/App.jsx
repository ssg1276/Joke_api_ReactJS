import Card from './Components/Card'

function App() {
  return (
    <div
      className=" w-[100vw] h-[100vh] flex items-center justify-center text-center bg-cover"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/0c/0c/d6/0c0cd6208e146749324e8fbd08d05102.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Card />
    </div>
  )
}

export default App
