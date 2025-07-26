import React from 'react';
import { Card, Typography, Collapse, List, Button } from 'antd';
import {
    QuestionCircleOutlined,
    MailOutlined,
    PhoneOutlined,
    MessageOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HelpSupport: React.FC = () => {
    const faqs = [
        {
            key: '1',
            label: "How do I add a new trade to my journal?",
            children: <p>Navigate to the 'Trading Form' section and fill in all the trade details. Click 'Save Trade' to record it in your journal.</p>
        },
        {
            key: '2',
            label: "Can I export my trade data?",
            children: <p>Yes, you can export your trade history in CSV format from the 'Trade List' page by clicking the 'Export' button.</p>
        },
        {
            key: '3',
            label: "How is the Smart Analyzer calculated?",
            children: <p>The Smart Analyzer evaluates multiple factors including technical setup, market conditions, historical performance, and risk management to provide a trade recommendation.</p>
        },
        {
            key: '4',
            label: "Is my data secure?",
            children: <p>Yes, all your trading data is encrypted and securely stored. We never share your information with third parties.</p>
        }
    ];

    const collapseItems = faqs.map(faq => ({
        key: faq.key,
        label: <span style={{ color: '#314158' }}>{faq.label}</span>,
        children: <p style={{ color: '#62748e' }}>{faq.children}</p>
    }));

    return (
        <div>
            <Card style={{
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={2} style={{ color: '#314158' }}>
                    <QuestionCircleOutlined /> Help & Support
                </Title>
                <Paragraph style={{ color: '#62748e' }}>
                    Get help with using Ubuntu FX Trading Journal or contact our support team.
                </Paragraph>
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={3} style={{ color: '#314158' }}>Frequently Asked Questions</Title>
                <Collapse accordion items={collapseItems} />
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={3} style={{ color: '#314158' }}>Contact Support</Title>
                <Paragraph style={{ color: '#62748e' }}>
                    If you can't find an answer to your question, contact our support team:
                </Paragraph>
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        {
                            icon: <MailOutlined style={{ color: '#1890ff' }} />,
                            title: 'Email Support',
                            description: 'support@ubuntufx.com'
                        },
                        {
                            icon: <PhoneOutlined style={{ color: '#1890ff' }} />,
                            title: 'Phone Support',
                            description: '+1 (555) 123-4567'
                        },
                        {
                            icon: <MessageOutlined style={{ color: '#1890ff' }} />,
                            title: 'Live Chat',
                            description: 'Available 24/7'
                        }
                    ]}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={item.icon}
                                title={<span style={{ color: '#314158' }}>{item.title}</span>}
                                description={<span style={{ color: '#62748e' }}>{item.description}</span>}
                            />
                        </List.Item>
                    )}
                />
                <div style={{ marginTop: 24, textAlign: 'center' }}>
                    <Button type="primary" size="large">
                        Start Live Chat
                    </Button>
                </div>
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={3} style={{ color: '#314158' }}>Documentation & Resources</Title>
                <Paragraph style={{ color: '#62748e' }}>
                    Access our comprehensive guides and resources to get the most out of Ubuntu FX:
                </Paragraph>
                <ul style={{ color: '#62748e' }}>
                    <li>User Manual</li>
                    <li>Video Tutorials</li>
                    <li>Trading Strategy Guides</li>
                    <li>API Documentation</li>
                </ul>
            </Card>
        </div>
    );
};

export default HelpSupport;