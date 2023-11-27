import { ChangeEvent, useEffect, useState } from "react";
import { CoffeType } from "./types";
import Coffee from "./components/coffee";

function App() {
  const [filter, setFilter] = useState('all')
  const [coffeesData, setCoffeesData] = useState<CoffeType[] | null>(null)
  const [coffees, setCoffees] = useState<CoffeType[] | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setFilter(value)
    const coffeesAvailables = coffeesData?.filter((coffe: CoffeType) => coffe.available === true) || null
    value === "all"
      ? setCoffees(coffeesData) 
      : setCoffees(coffeesAvailables)
  }

  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      const data = await response.json()
      setCoffeesData(data)
      setCoffees(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="min-h-screen h-full py-[10%] px-10 flex relative items-center justify-center">
      <img src="/assets/bg-cafe.jpg" className="left-0 absolute top-0 z-10" alt="background image" />
      <main className="bg-[#1B1D1F] py-24 xl:w-[90%] w-[80%] gap-3 p-10 flex flex-col justify-center items-center relative overflow-x-hidden z-10 rounded-xl">
        <img src="/assets/vector.svg" width={270} className="absolute -z-10 top-10 -right-[73px] transition-all lg:right-[100px] xl:right-[265px]"/>
        <h1 className="text-3xl font-bold tracking-wider">Our Collection</h1>
        <p className="text-lg px-2 leading-6 max-w-[550px] text-[#6F757C] text-center">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className="flex gap-2 scale-90 mt-3 w-fit px-1 relative items-center justify-center">
          <div className={`w-[50%] left-0 transition-all bg-[#6F757C] absolute h-10 rounded-lg ${filter === "all" ? '' : "translate-x-full"}`}></div>
          <input className="w-fit h-full hidden" onChange={handleChange} type="radio" name="buttons" id="all" value="all"/>
          <label className="flex justify-center w-[150px] px-5 h-fit z-10 font-bold tracking-wide" htmlFor="all">All Products</label>
          <input className="w-fit h-full hidden" onChange={handleChange} type="radio" name="buttons" value="available" id="available" />
          <label className="flex w-[150px] px-5 h-fit z-10 font-bold tracking-wide" htmlFor="available">Available Now</label>
        </div>
        <div className="h-full px-2 flex justify-center flex-wrap mt-5">
          {coffees?.map(coffee => <Coffee key={coffee.id} coffee={coffee}/>)}
        </div>
      </main>
    </div>
  )
}

export default App
