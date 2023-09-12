import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { products } from '../../../public/lib'

const inter = Inter({ subsets: ['latin'] })

export default function ProductDetail() {
    const route = useRouter()
    const productId = route?.query?.id
    const product = products.find((data) => data.id == productId)
    const { title, description, image, id, category, rating } = product

    return (
        <main
            className={`flex min-h-screen flex-col p-2 md:p-3 lg:p-5 ${inter.className}`}
        >

            <h1 className='text-center my-3 font-bold text-3xl'>ABC Store</h1>
            <div className='flex flex-col md:flex-row sm:mx-2 md-mx-5 lg:mx-10 bg-white p-2 lg:p-4 rounded-md'>

                <div className='w-full flex justify-center md:w-6/12'>
                    <Image src={image}
                        width={280}
                        height={300}
                    />
                </div>
                <div className='w-full md:w-6/12 flex flex-col '>
                    <h1 className='font-bold mt-10'>{title}</h1>
                    <p className='font-regular mt-4 text-[14px]'>{description}</p>
                    <p className='font-semibold mt-4 text-[14px]'>Catogory : {category}</p>
                    <p className='font-medium mt-4 text-[14px]'>Rating : {rating.rate} {`(${rating.count})`} </p>
                </div>

            </div>


        </main>
    )
}
