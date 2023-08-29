
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

function UserCard({ name, email, img, id, onClick, isChosen }) {
    return (
        <div key={id} onClick={onClick}
            className={`h-50 p-2 cursor-pointer bg-red-${isChosen ? '500' : '100'} my-1 flex`}

        >
            <Avatar src={img ? img : undefined} size={'large'} icon={<UserOutlined />} />
            <div className='pl-3'>
                <h2 className={`font-bold ${isChosen ? 'text-white' : 'text-black'} `}>{name}</h2>
                <span className={`font-normal ${isChosen ? 'text-white' : 'text-black'} `}>{email}</span>
            </div>
        </div>
    )
}

export default UserCard