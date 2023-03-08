import { useState, useEffect, Fragment } from 'react'
import './App.css'

function App() {
  return (
    <Fragment>
      <Sam />
      <Sam2 />
      <Sam3 />
    </Fragment>
  )
}

const Sam = (props) => {
  return (
    <div className=" flex bg-blue-900 text-blue-50 text-center p-8">
      <h1 className="text-xl font-bold ml-8"> Samuel Designs</h1>
      <ul className=" text-lg flex ml-auto space-x-4 font-medium mr-8">
        <li> Home </li>
        <li> About Us </li>
        <li> Contacts </li>
      </ul>
    </div>
  )
}

const Sam2 = (props) => {
  return (
    <div className=" flex flex-col justify-around  m-auto mt-8 bg-blue-100 rounded-md h-80 w-1/2">
      <div className=" h-full w-full border-b border-blue-900 ">
        <div className="p-4">
          <p className="font-bold text-lg text-blue-900 mb-2">
            Baked beans, 200 Calories
          </p>
          <button className="  hover:bg-blue-700 font-medium uppercase bg-blue-900 text-white px-5 py-2 rounded-xl">
            eat it
          </button>
        </div>
      </div>
      <div className=" flex h-full w-full  ">
        <div className="p-4">
          <p className="font-bold text-lg text-blue-900 mb-2">
            Grilled Veggies, 80 calories
          </p>
          <button className="  hover:bg-blue-700 font-medium uppercase bg-blue-900 text-white px-5 py-2 rounded-xl">
            eat it
          </button>
        </div>
      </div>
      <div className=" border-t border-blue-900 h-full w-full">
        <div className="p-4">
          <p className="font-bold text-lg text-blue-900 mb-2">
            Soup, 100 calories
          </p>
          <button className=" hover:bg-blue-700 font-medium uppercase bg-blue-900 text-white px-5 py-2 rounded-xl">
            eat it
          </button>
        </div>
      </div>
    </div>
  )
}

const Sam3 = (props) => {
  return (
    <div className="  text-blue-900 text-center m-auto mt-8 bg-blue-100 rounded-md font-medium h-28 w-1/2">
      <div className="flex justify-between pt-6 pl-5 ">
        <div className="text-left font-extrabold text-xl text-blue-900 ">
          <p>Meals</p>
          <p>Remaining</p>
        </div>
        <button className=" hover:bg-blue-700 font-medium uppercase bg-blue-900 text-white px-5 py-2 mr-8 rounded-xl">
          05
        </button>
      </div>
    </div>
  )
}

export default App
