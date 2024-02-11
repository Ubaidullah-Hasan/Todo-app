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
        <div className='bg-gray-100 m-10 px-[50px] py-8 rounded-3xl h-screen '>

          {/* container layout start */}
          <div className='flex gap-5'>
            <div className=' w-full'>
              <MyCalendar />
              <TodoApp />
            </div>
            <div className=' w-full'>
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
