import React from 'react';
import { Card, Typography, Steps } from 'antd';
import {
    FileTextOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const TradingInstructions: React.FC = () => {
    return (
        <div>
            <Card style={{
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={2} style={{ color: '#314158' }}>
                    <FileTextOutlined /> Trading Instructions
                </Title>
                <Paragraph style={{ color: '#62748e' }}>
                    Follow these guidelines to maintain a consistent and effective trading approach.
                </Paragraph>
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={3} style={{ color: '#314158' }}>Pre-Trade Checklist</Title>
                <Steps direction="vertical" size="small" current={3}>
                    <Step
                        title={<span style={{ color: '#314158' }}>Market Analysis</span>}
                        description={<span style={{ color: '#62748e' }}>Review market conditions and economic calendar</span>}
                        icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                    />
                    <Step
                        title={<span style={{ color: '#314158' }}>Strategy Confirmation</span>}
                        description={<span style={{ color: '#62748e' }}>Ensure trade aligns with your trading plan</span>}
                        icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                    />
                    <Step
                        title={<span style={{ color: '#314158' }}>Risk Assessment</span>}
                        description={<span style={{ color: '#62748e' }}>Calculate position size and set stop loss</span>}
                        icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                    />
                    <Step
                        title={<span style={{ color: '#314158' }}>Emotional State</span>}
                        description={<span style={{ color: '#62748e' }}>Confirm you're in the right mental state to trade</span>}
                        icon={<ClockCircleOutlined style={{ color: '#faad14' }} />}
                    />
                </Steps>
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={3} style={{ color: '#314158' }}>Trade Execution Rules</Title>
                <ul style={{ color: '#62748e' }}>
                    <li>Never risk more than 2% of your account on a single trade</li>
                    <li>Always use a stop loss</li>
                    <li>Follow your trading plan without exception</li>
                    <li>Trade only during your defined session times</li>
                    <li>Keep detailed notes for every trade</li>
                </ul>
            </Card>

            <Card style={{
                marginTop: 24,
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={3} style={{ color: '#314158' }}>Post-Trade Analysis</Title>
                <Steps direction="vertical" size="small" current={0}>
                    <Step
                        title={<span style={{ color: '#314158' }}>Record Trade Details</span>}
                        description={<span style={{ color: '#62748e' }}>Log all trade parameters in your journal</span>}
                        icon={<ExclamationCircleOutlined style={{ color: '#1890ff' }} />}
                    />
                    <Step
                        title={<span style={{ color: '#314158' }}>Review Trade Performance</span>}
                        description={<span style={{ color: '#62748e' }}>Analyze what went right or wrong</span>}
                        icon={<ExclamationCircleOutlined style={{ color: '#1890ff' }} />}
                    />
                    <Step
                        title={<span style={{ color: '#314158' }}>Update Strategy Notes</span>}
                        description={<span style={{ color: '#62748e' }}>Document any insights for future trades</span>}
                        icon={<ExclamationCircleOutlined style={{ color: '#1890ff' }} />}
                    />
                </Steps>
            </Card>
        </div>
    );
};

export default TradingInstructions;