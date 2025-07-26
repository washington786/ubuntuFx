import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Card,
    Typography,
    message
} from 'antd';
import {
    UserOutlined,
    LockOutlined,
    LoginOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values: never) => {
        setLoading(true);
        console.log('Received values:', values);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            message.success('Login successful!');
            onLogin();
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
                    <Text type="secondary">Forex Trading Journal</Text>
                </div>

                <Form
                    name="login"
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
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
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
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

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{ color: '#62748e' }}>Remember me</Checkbox>
                        </Form.Item>
                        <Link style={{ float: 'right', color: '#45556c' }} to={'/recover-password'}>Forgot password?</Link>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            size="large"
                            block
                            icon={<LoginOutlined />}
                            style={{
                                background: '#45556c',
                                borderColor: '#45556c',
                                borderRadius: '4px'
                            }}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Text type="secondary">Don't have an account?</Text>{' '}
                    <Link to="/register" style={{ color: '#45556c' }}>Register now!</Link>
                </div>
            </Card>
        </div>
    );
};

export default Login;