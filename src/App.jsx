import { useState, useEffect } from 'react'
import { Card } from '../component/Card'
import { data } from '../data'

export const App = () => {

  const [datos, setDatos] = useState(data)
  const [mode, setMode] = useState('dark')
  const [filtro, setFiltro] = useState(null)
  const [active, setActive] = useState(['','',''])

  useEffect(() => { setFiltro(data) }, [])

  const changeMode = () => {
    if (mode == 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  const filter = (e) => {
    const obj = e.target.id
    var estado = ''
    setActive(['','',''])
    
    if(obj === 'Active'){estado = datos.filter(e => e.isActive === true);setActive(['','bg-p-red-700','']) }
    if(obj==='Inactive'){estado = datos.filter(e => e.isActive === false);setActive(['','','bg-p-red-700'])}
    if(obj==='All'){estado = datos;setActive(['bg-p-red-700','','']) }
    setFiltro(estado)
  }

  return (
    <div className={`bg-gradient-to-b duration-400 ${mode == 'dark' ? 'from-dark-p-obs to-dark-p-claro' : 'from-light-p-obs to-light-p-claro'} min-h-screen pb-5`}>
      <div className="pt-10 w-[90%] mx-auto">
        <div className={`flex place-content-between items-center p-2.5 rounded-2xl duration-400 border-2 ${mode == 'dark' ? 'bg-p-ntrl-dark-3 border-p-ntrl-900' : 'bg-p-ntrl-light-1 border-p-ntrl-light-4'}`}>
          <div>
            <img src={`../assets/images/logo-${mode}.svg`} alt="" className="w-full" />
          </div>
          <div className={`h-full p-3 rounded-xl duration-400 ${mode == 'dark' ? 'bg-p-ntrl-dark-2' : 'bg-p-ntrl-light-3'}`} onClick={changeMode}>
            <img src={`${mode == 'dark' ? "../assets/images/icon-sun.svg" : "../assets/images/icon-moon.svg"}`} alt="" />
          </div>
        </div>
      </div>
      <div className={`mt-4 md:mt-14 w-[90%] mx-auto flex flex-col md:flex-row md:place-content-between place-content-center duration-400 ${mode == 'dark' ? 'text-white' : 'text-black'}`}>
        <h2 className='text-3xl font-bold text-center'>Extensions List</h2>
        <div className='flex gap-2.5 place-content-center'>
          <a id='All' onClick={filter} className={`hover:bg-p-red-700 ${active[0]} px-5 py-2  w-auto rounded-3xl duration-400 ${mode == 'dark' ? 'bg-p-ntrl-dark-3' : 'bg-p-ntrl-light-1'} `}>All</a>
          <a id='Active' onClick={filter} className={`hover:bg-p-red-700 ${active[1]} px-5 py-2  w-auto rounded-3xl duration-400 ${mode == 'dark' ? 'bg-p-ntrl-dark-3' : 'bg-p-ntrl-light-1'} `}>Active</a>
          <a id='Inactive' onClick={filter} className={`hover:bg-p-red-700 ${active[2]} px-5 py-2  w-auto rounded-3xl duration-400 ${mode == 'dark' ? 'bg-p-ntrl-dark-3' : 'bg-p-ntrl-light-1'} `}>Inactive</a>
        </div>
      </div>
      <div className="mt-4 w-[90%] mx-auto text-p-ntrl-0 flex flex-row gap-y-3 flex-wrap place-content-between">
        {filtro && filtro.map((e, i) => <Card dato={e} modo={mode} clave={i} />)}
      </div>
    </div>
  )
}

