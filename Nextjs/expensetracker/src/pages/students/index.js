
import { Button, Checkbox, Table, Form, Input } from 'antd';
import { useState } from 'react';

export default function Student() {
    

    const [students, setStudents] = useState([])

    const onFinish = (values) => {

        console.log(values);
        let stu = students
        stu.push(values)
        setStudents([...stu])
    };

 

    const columns = [
        {
            title: 'Student Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Student Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Student Class',
            dataIndex: 'class',
            key: 'class',
        },
    ];

    return (
        <main
            className={`flex p-5 min-h-screen flex-col bg-white`}
        >
            <Form
         
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                
                autoComplete="off"
            >
                <Form.Item
                    label={'Student Name'}
                    name={'name'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={'Student Class'}
                    name={'class'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your class!',
                        },
                    ]}

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={'Student Age'}
                    name={'age'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                    ]}

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Table dataSource={students} columns={columns} />

        </main>
    )
}
