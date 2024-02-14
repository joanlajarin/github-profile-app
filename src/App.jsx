import './App.css'
import RepositoryCard from './components/RepositoryCard'
function App() {

  return (
    <div className="flex flex-col gap-[12px] bg-[#20293A]">
      <header className='relative'>
          <img className='' src='src/images/hero-image-github-profile.png'/>
          <div className='absolute right-[50%] translate-x-1/2 top-[32px] flex flex-col w-fit gap-[8px]'>
              <input className='p-[16px] rounded-lg bg-[#20293A] w-[400px]'  placeholder='username'></input>
              <div className='p-[8px] rounded-lg bg-[#20293A] w-[400px] flex gap-[12px]'>
                <img className='size-[60px]'></img>
                <div className='flex flex-col justify-center'>
                    <span className='text-[#CDD5E0] text-[16px]'>GitHub</span>
                    <span className='text-[#CDD5E0] text-[12px]'>How people build software</span>
                </div>
              </div>
          </div>
        </header>
        
        <main className='flex flex-col items-center'>
          <header className='relative w-[1000px]'>
              <div className='flex gap-[20px] justify-center text-[16px] font-medium'>
                <div className='flex bg-[#111729] w-fit py-[16px] rounded-xl'>
                  <span className="text-[#364153] px-[20px] border-r border-[#364153]">Followers</span>
                  <span className="text-[#CDD5E0] px-[20px]">27839</span>
                </div>
                <div className='flex bg-[#111729] w-fit py-[16px] rounded-xl'>
                  <span className="text-[#364153] px-[20px] border-r border-[#364153]">Following</span>
                  <span className="text-[#CDD5E0] px-[20px]">0</span>
                </div>
                <div className='flex bg-[#111729] w-fit py-[16px] rounded-xl'>
                  <span className="text-[#364153] px-[20px] border-r border-[#364153]">Location</span>
                  <span className="text-[#CDD5E0] px-[20px]">San Francisco, CA</span>
                </div>
              </div>
              <img className=" absolute size-[120px] bottom-0 left-0" src=""></img>

          </header>
          <main className='w-[1000px] flex flex-col mt-[20px]'>
              <h1 className='text-[#CDD5E0] text-[32px]'>GitHub</h1>
              <h2 className='text-[#CDD5E0] text-[16px] mt-[8px]'>How people build software</h2>
              <section className='mt-[34px] grid grid-cols-2 h-fit gap-y-[34px] gap-x-[32px]'>
                <RepositoryCard/>
                <RepositoryCard/>
                <RepositoryCard/>
                <RepositoryCard/>
                <RepositoryCard/>

              </section>
              <span className='text-[#CDD5E0] text-center mt-[46px] mb-[100px]'>View all repositories</span>
          </main>
        </main>
    </div>
  )
}

export default App
