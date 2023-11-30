import Translator from "./components/translator"

function App() {
  return (
    <div className="h-full min-h-screen gap-14 bg-[#040711] w-full justify-center items-center flex flex-col">
      <img src="/assets/hero_img.jpg" alt="hero image" className="absolute top-0 left-0 w-full"/>
      <header className="flex justify-center w-full">
        <img width={150} src="/assets/logo.svg" alt="logo image" className="z-0" />
      </header>
      <main className="z-10 h-fit min-h-[350px] w-full gap-5 justify-center flex flex-wrap">
        <Translator isTranslation={false} dark={false} />
        <Translator isTranslation={true} dark={true} />
      </main>
    </div>
  )
}

export default App
