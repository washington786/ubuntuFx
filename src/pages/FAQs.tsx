import React from 'react';
import { Card, Typography, Collapse } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const FAQs: React.FC = () => {
    const faqs = [
        {
            question: "How do I reset my password?",
            answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email."
        },
        {
            question: "What devices can I use Ubuntu FX on?",
            answer: "Ubuntu FX works on all modern browsers and is optimized for desktop and tablet devices."
        },
        {
            question: "How often is my data backed up?",
            answer: "All data is automatically backed up daily to secure cloud storage."
        },
        {
            question: "Can I use Ubuntu FX offline?",
            answer: "While the app requires an internet connection, we're working on an offline mode for future releases."
        },
        {
            question: "How do I delete my account?",
            answer: "Contact our support team through the Help & Support page to request account deletion."
        }
    ];

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
                <Collapse accordion>
                    {faqs.map((faq, index) => (
                        <Panel header={<span style={{ color: '#314158' }}>{faq.question}</span>} key={index}>
                            <p style={{ color: '#62748e' }}>{faq.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
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
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Live Chat: Available 24/7</li>
                </ul>
            </Card>
        </div>
    );
};

export default FAQs;