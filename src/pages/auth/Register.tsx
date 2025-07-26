// pages/auth/Register.tsx
import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Card,
    Typography,
    message
} from 'antd';
import {
    UserOutlined,
    LockOutlined,
    MailOutlined,
    UserAddOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Register: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values: never) => {
        setLoading(true);
        console.log('Received values:', values);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            message.success('Registration successful! Please check your email to verify your account.');
        }, 1500);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1d293d 0%, #0f172b 100%)'
        }}>
            <Card style={{
                width: 400,
                borderRadius: 8,
                background: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <Title level={2} style={{ color: '#314158' }}>Ubuntu FX</Title>
                    <Text type="secondary">Create Your Account</Text>
                </div>

                <Form
                    name="register"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: 'Please input your username!' },
                            { min: 3, message: 'Username must be at least 3 characters' }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined style={{ color: '#62748e' }} />}
                            placeholder="Username"
                            size="large"
                            style={{
                                borderRadius: '4px',
                                borderColor: '#cad5e2'
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please enter a valid email!' }
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined style={{ color: '#62748e' }} />}
                            placeholder="Email"
                            size="large"
                            style={{
                                borderRadius: '4px',
                                borderColor: '#cad5e2'
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            { min: 6, message: 'Password must be at least 6 characters' }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined style={{ color: '#62748e' }} />}
                            placeholder="Password"
                            size="large"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            style={{
                                borderRadius: '4px',
                                borderColor: '#cad5e2'
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined style={{ color: '#62748e' }} />}
                            placeholder="Confirm Password"
                            size="large"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            style={{
                                borderRadius: '4px',
                                borderColor: '#cad5e2'
                            }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            size="large"
                            block
                            icon={<UserAddOutlined />}
                            style={{
                                background: '#45556c',
                                borderColor: '#45556c',
                                borderRadius: '4px'
                            }}
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Text type="secondary">Already have an account?</Text>{' '}
                    <Link to="/login" style={{ color: '#45556c' }}>Sign in</Link>
                </div>
            </Card>
        </div>
    );
};

export default Register;