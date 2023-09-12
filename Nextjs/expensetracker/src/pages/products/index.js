import { Inter } from 'next/font/google'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { products } from '../../../public/lib';
import Link from 'next/link';
const { Meta } = Card;
const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    return (
        <main
            className={` min-h-screen p-24 ${inter.className}`}
        >

            <h2>Products</h2>
            <div className='flex flex-wrap'>
                {
                    products.map((data, ind) => {
                        const { title, description, image , id } = data
                        return (
                            <Link href={`products/${id}`}>
                                <Card
                                    key={ind}
                                    style={{
                                        width: 280,
                                        margin: 5,
                                        height: 300,
                                        overflow: 'hidden'
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={image}
                                            style={{
                                                height: 160,
                                                width: 230,
                                                margin: 10
                                            }}
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                        title={title}
                                        description={description}
                                        style={{ overflow: 'hidden' }}
                                    />
                                </Card>
                            </Link>

                        )
                    })
                }
            </div>

        </main>
    )
}
