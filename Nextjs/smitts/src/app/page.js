'use client'
import Card from '@/components/Card'
import Image from 'next/image'
import { useState } from 'react'
const product = [
  {
    img:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'watch',
    name: 'Watch'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'phonne',
    name: 'Head Phone'
  },
  {
    img:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'camera',
    name: 'Camera'
  },
  {
    img:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'watch',
    name: 'Watch'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'phonne',
    name: 'Head Phone'
  },
  {
    img:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'camera',
    name: 'Camera'
  }
]

export default function Home () {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const handleOnChangeTodo = e => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    if (!todo) return alert('Please add something in todo')
    let todoUpdate = todos
    todoUpdate.unshift(todo)
    setTodos([...todoUpdate])
    setTodo('')
  }

  const deleteTodo = ind => {
    let todoUpdate = todos
    todoUpdate.splice(ind, 1)
    setTodos([...todoUpdate])
  }

  const onEdit = ind => {
    console.log(todos[ind])
    setTodo(todos[ind])
    setEditIndex(ind)
    setIsEdit(true)
  }

  const editTodo = () => {
    let todoUpdate = todos
    todoUpdate[editIndex] = todo
    setTodos([...todoUpdate])
    setIsEdit(false)
    setEditIndex(null)
    setTodo('')
  }

  return (
    <main className='flex min-h-screen flex-col items-center p-2'>
      <h1 className='text-3xl font-bold m-3'>Todo App Using Next js</h1>

      <div
        className={
          'flex border-slate-500 bg-white p-3 rounded-md  my-2 w-[500px] items-center	 justify-between'
        }
      >
        <input
          value={todo}
          onChange={handleOnChangeTodo}
          placeholder={'Todo'}
          className={'p-2 w-[400px]'}
        />
        <button
          onClick={() => (isEdit ? editTodo() : addTodo())}
          className={'p-2 m-2 bg-white border-2 rounded-md'}
        >
          {isEdit ? 'Update' : 'Add'}
        </button>
      </div>
      {todos.map((data, index) => {
        return (
          <div
            className={
              'flex bg-white p-3 rounded-md  my-2 w-[500px] items-center	 justify-between'
            }
            key={index}
          >
            <h1>{data}</h1>
            <span>
              <button
                onClick={() => onEdit(index)}
                className={'p-3 m-2 bg-sky-300 rounded-md'}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className={'p-3 m-2 bg-red-600 text-white rounded-md'}
              >
                Delete
              </button>
            </span>
          </div>
        )
      })}
    </main>
  )
}
