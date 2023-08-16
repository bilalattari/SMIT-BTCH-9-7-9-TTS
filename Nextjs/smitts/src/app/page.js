'use client'
import Card from '@/components/Card'
import Image from 'next/image'
import { useState, useMemo, useCallback, memo } from 'react'

export default function Home () {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const randomNumber = useMemo(() => Math.random() * 100000000, [todos])

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

  const deleteTodo = useCallback(ind => {
    let todoUpdate = todos
    todoUpdate.splice(ind, 1)
    setTodos([...todoUpdate])
  }, [])

  const onEdit = useCallback(ind => {
    console.log(todos[ind])
    setTodo(todos[ind])
    setEditIndex(ind)
    setIsEdit(true)
  }, [])

  const editTodo = () => {
    let todoUpdate = todos
    todoUpdate[editIndex] = todo
    setTodos([...todoUpdate])
    setIsEdit(false)
    setEditIndex(null)
    setTodo('')
  }

  // const todosToShow = useMemo(() => todos, [todos])

  return (
    <main className='flex min-h-screen flex-col items-center p-2'>
      <h1 className='text-3xl font-bold m-3'>Todo App Using Next js</h1>

      <h1 className='text-3xl font-bold m-3'>{randomNumber}</h1>
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
            <EditDelBtn onEdit={onEdit} ind={index} onDelete={deleteTodo} />
          </div>
        )
      })}
    </main>
  )
}

const EditDelBtn = memo(({ onEdit, onDelete, ind }) => {
  console.log('Render Edit Delete Component')
  return (
    <span>
      <button
        onClick={() => onEdit(ind)}
        className={'p-3 m-2 bg-sky-300 rounded-md'}
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(ind)}
        className={'p-3 m-2 bg-red-600 text-white rounded-md'}
      >
        Delete
      </button>
    </span>
  )
})
