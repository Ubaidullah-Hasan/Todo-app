import './App.css'
import MyCalendar from './Component/Calendar/CalendarDate'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <div className=' min-h-screen overflow-hidden'>
        <Header />
        <div className='bg-gray-100 m-10 px-[50px] py-8 rounded-3xl h-screen '>
          <MyCalendar />
        </div>

      </div>
    </>
  )
}

export default App
