function Button({ children, onClick }) {
    return (
        <div onClick={onClick} className='p-6 m-5 bg-red-400 text-white text-lg cursor-pointer rounded'>
            <span>{children}</span>
        </div>
    )
}

export default Button