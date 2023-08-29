import { Inter } from 'next/font/google'

import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
    Upload
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { createAccount, setUserData, uploadImg } from '@/config/firebase';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


export default function Register() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onFinish = async (values) => {
        setLoading(true)
        try {
            const account = await createAccount(values.email, values.password)
            console.log('account-->', account)
            let userImg = ''
            if (values.dragger) {
                userImg = await uploadImg(values.dragger[0].originFileObj, account.user.uid)
            }
            console.log(userImg)

            const userInfo = values
            delete userInfo.password
            delete userInfo.dragger
            userInfo.uid = account.user.uid
            userInfo.profile = userImg ? userImg : ''

            await setUserData(userInfo)

            router.push('/chat')
            setLoading(false)

        }
        catch (err) {
            setLoading(false)
            alert(err)
        }

    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className='bg-white rounded-md w-[500px] p-4'>

                <h3 className='text-center font-bold my-5'>Sign Up on Chat App </h3>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label="Nickname"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your nickname!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="intro"
                        label="Intro"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Intro',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>

                    <Form.Item label="Dragger">
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button loading={loading} htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </main>
    )
}
