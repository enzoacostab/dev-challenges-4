import { CoffeType } from "../types";

export default function Coffee ({ coffee }: { coffee: CoffeType }) {
  const { image, popular, name, votes, rating, available, price } = coffee
  
  return (
    <div className="my-5 scale-90">
      <div className="relative">
        <img src={image} width={300} height={185} className="rounded-2xl" alt="coffe image" />
        {popular ? <span className="absolute top-3 left-3 font-bold text-sm px-4 py-1 bg-[#F6C768] text-[#111315] rounded-2xl">Popular</span> : null}
      </div>
      <div className="flex justify-between mt-3">
        <h4 className="text-lg font-bold tracking-wide">{name}</h4>
        <p className="bg-[#BEE3CC] font-bold px-2 py-1 text-sm rounded-md text-[#1B1D1F]">{price}</p>
      </div>
      <div className="flex justify-between mt-1 items-center">
        <div className="flex items-center gap-1">
          <img width={30} src={rating ? '/assets/Star_fill.svg' : '/assets/Star.svg'} alt="rating image" />
          <p className="">{rating}</p>
          <p className="text-[#6F757C] font-bold">({votes} votes)</p>
        </div>
        {!available ? <p className="text-[#ED735D] font-bold">Sold out</p> : null}
      </div>
    </div>
  )
}