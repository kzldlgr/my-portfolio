import skill from '../skills';

export default function Skills() {
  console.log(skill)
  return (
    <section className="section" id="skills">
      <div className="container mx-auto lg:max-w-[1500px] lg:mt-24">
        <div className='flex flex-col'>
          <h1 className='h2 text-accent mb-0 text-center'>Skills</h1>
          <h1 className='mb-4 text-center'>Technologies I have used</h1>
          <div className="grid grid-cols-2 lg:grid-cols-9 gap-y-4 gap-x-8 lg:gap-x-4 ">
            {skill.map((ski, index) => {
              return (
                <div key={index} className='w-32 h-32 text-center shadow-xl border border-black rounded-2xl flex flex-col justify-center items-center hover:scale-110 transition'>
                  <img src={ski.url} alt="" className='w-24 aspect-square	object-contain p-4 '/>
                  <h1 className='w-full whitespace-nowrap text-center font-bold'>{ski.name}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
