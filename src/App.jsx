import './App.css'
import MyCalendar from './Component/Calendar/MyCalendar'
import Header from './Component/Header/Header'
import TodoApp from './Component/TodoApp/TodoApp'
import TodoList from './Component/TodoApp/TodoList'

function App() {

  return (
    <>
      <div className=' min-h-screen overflow-hidden'>
        <Header />

        {/* container */}
        <div className='bg-gray-100 md:m-10 m-3 md:px-[50px] px-4 md:py-8 py-6 md:rounded-3xl rounded-md '>

          {/* container layout start */}
          <div className='flex flex-col xl:flex-row gap-x-10 gap-y-20'>
            <div className='w-full'>
              <MyCalendar />
              <TodoApp />
            </div>
            <div className='w-full'>
              <TodoList />
            </div>
          </div>
          {/* container layout end */}

        </div>
      </div>
    </>
  )
}

export default App
