
import { ToggleButton } from "./ToggleButton"

export const Card = ({ dato, modo, clave }) => {
    console.log(dato)
    return (
        <div key={clave} className={`lg:w-[33%] w-[100%] rounded-2xl flex flex-col place-content-between duration-400 border-2 ${modo=='dark' ? 'border-p-ntrl-600  bg-p-ntrl-dark-3 text-white' : 'border-p-ntrl-light-4 bg-p-ntrl-light-1 text-black'} `}>
            <div className="flex flex-row px-4 mt-4">
                <div className="flex">
                    <img src={dato.logo} alt="" className="size-16" />
                    <div className="flex flex-col pl-5 mb-5  ">
                        <h2 className="font-bold text-2xl">{dato.name}</h2>
                        <p className="text-md">{dato.description}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row place-content-between w-full px-5 md:my-6 my-2 items-center">
                <a className={`px-5 py-2 w-auto rounded-3xl font-bold hover:bg-p-red-700 border-2 ${modo=='dark' ? 'bg-p-ntrl-dark-2 border-p-ntrl-dark-4' : 'bg-p-ntrl-light-3 border-p-ntrl-light-4'} }`}>Remove</a>
                <ToggleButton estado={dato.isActive}/>
            </div>
        </div>
    )
}