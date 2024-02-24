import Card from './Components/Card'

function App() {
  return (
    <div
      className=" w-[100vw] h-[100vh] flex items-center justify-center text-center bg-cover"
      style={{
        backgroundImage:
          "url('https://cdn.oneesports.gg/cdn-data/2022/11/MW2_Ghost_Face_2-1024x576.jpg')",
      }}
    >
      <Card />
    </div>
  )
}

export default App
