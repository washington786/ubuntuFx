import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const FAQs: React.FC = () => {
    const faqs = [
        {
            key: '1',
            label: "How do I reset my password?",
            children: <p>Click on 'Forgot Password' on the login page and follow the instructions sent to your email.</p>
        },
        {
            key: '2',
            label: "What devices can I use Ubuntu FX on?",
            children: <p>Ubuntu FX works on all modern browsers and is optimized for desktop and tablet devices.</p>
        },
        {
            key: '3',
            label: "How often is my data backed up?",
            children: <p>All data is automatically backed up daily to secure cloud storage.</p>
        },
        {
            key: '4',
            label: "Can I use Ubuntu FX offline?",
            children: <p>While the app requires an internet connection, we're working on an offline mode for future releases.</p>
        },
        {
            key: '5',
            label: "How do I delete my account?",
            children: <p>Contact our support team through the Help & Support page to request account deletion.</p>
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
                    <QuestionCircleOutlined /> Frequently Asked Questions
                </Title>
                <Paragraph style={{ color: '#62748e' }}>
                    Find answers to common questions about Ubuntu FX Trading Journal.
                </Paragraph>
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Collapse accordion items={collapseItems} />
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={3} style={{ color: '#314158' }}>Still Need Help?</Title>
                <Paragraph style={{ color: '#62748e' }}>
                    If you can't find an answer to your question, please contact our support team.
                </Paragraph>
                <ul style={{ color: '#62748e' }}>
                    <li>Email: support@ubuntufx.com</li>
                    <li>Phone: +27 812 767 830</li>
                    <li>Live Chat: Available 24/7</li>
                </ul>
            </Card>
        </div>
    );
};

export default FAQs;