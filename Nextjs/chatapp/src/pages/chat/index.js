import Image from 'next/image'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { collection, query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebase';
import UserCard from '@/components/UserCard';
import { useState } from 'react';


export default function Chat() {
    const userCollectionQuery = query(collection(db, 'users'))
    const [values, loading] = useCollectionDataOnce(userCollectionQuery)
    const [chatWith, setChatWith] = useState(null)

    return (
        <main
            className={`flex min-h-screen flex-col `}
        >
            <div className='w-full bg-red-500 h-[60px] flex items-center px-3 justify-between'>
                <h2 className='text-white font-bold'>Neghbourhood Chat</h2>
                <Avatar size={'large'} icon={<UserOutlined />} />
            </div>

            <div className='h-[550px] m-4  border-2 border-red-300 shadow-gray-300 flex'>
                <div className='w-4/12 border-r-2 bg-white border-red-300 '>
                    {
                        loading ?
                            <h3>Loading....</h3>
                            : null
                    }

                    {
                        values && values.map((data, ind) => {
                            return <UserCard
                                key={ind}
                                id={data.uid}
                                isChosen={data.uid === chatWith?.uid}
                                onClick={() => setChatWith(data)}
                                img={data.profile}
                                name={data.nickname} email={data.email} />
                        })
                    }


                </div>
                <div className='w-8/12 border-r-2 h-full '>
                    <div className='flex grow  h-[90%]  w-100'>
                    </div>

                    {
                        chatWith &&
                        <div className='flex m-2'>
                            <input placeholder={`Send msg to ${chatWith.nickname}`} className='p-2 border-2 grow border-red-300 rounded' />
                            <div className='bg-red-600 ml-2  text-white rounded p-2'>Send</div>
                        </div>
                    }
                </div>
            </div>

        </main>
    )
}
