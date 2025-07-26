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
    MailOutlined,
    SendOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const PasswordRecovery: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values: never) => {
        setLoading(true);
        console.log('Received values:', values);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            message.success('Password reset instructions sent to your email!');
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
                    <Text type="secondary">Recover Your Password</Text>
                </div>

                <Form
                    name="password-recovery"
                    onFinish={onFinish}
                >
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

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            size="large"
                            block
                            icon={<SendOutlined />}
                            style={{
                                background: '#45556c',
                                borderColor: '#45556c',
                                borderRadius: '4px'
                            }}
                        >
                            Send Reset Instructions
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Link to="/login" style={{ color: '#45556c' }}>Back to Login</Link>
                </div>
            </Card>
        </div>
    );
};

export default PasswordRecovery;