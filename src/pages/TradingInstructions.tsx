import React, { useState } from 'react';
import {
    Card,
    Typography,
    Steps,
    Tabs,
    List,
    Divider,
    Alert,
    Tag
} from 'antd';
import {
    FileTextOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined,
    BarChartOutlined,
    SearchOutlined,
    BugOutlined,
    ArrowDownOutlined,
    WarningOutlined,
    CrownOutlined,
    LineChartOutlined,
    ArrowUpOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;
const { TabPane } = Tabs;

const TradingInstructions: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1');

    const cardStyle = {
        background: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        marginBottom: '24px'
    };

    const titleStyle = {
        color: '#314158'
    };

    const textStyle = {
        color: '#62748e'
    };

    const dividerStyle = {
        color: '#314158',
        borderColor: '#e2e8f0'
    };

    return (
        <div style={{ padding: '16px' }}>
            <Card style={cardStyle}>
                <Title level={2} style={titleStyle}>
                    <FileTextOutlined /> Trading Instructions
                </Title>
                <Paragraph style={textStyle}>
                    Follow these guidelines to maintain a consistent and effective trading approach.
                </Paragraph>
            </Card>

            <Tabs
                defaultActiveKey="1"
                activeKey={activeTab}
                onChange={setActiveTab}
                tabBarStyle={{ marginBottom: '0' }}
            >
                <TabPane tab="General Guidelines" key="1">
                    <Card style={cardStyle}>
                        <Title level={3} style={titleStyle}>Pre-Trade Checklist</Title>
                        <Steps direction="vertical" size="small" current={3}>
                            <Step
                                title={<Text style={titleStyle}>Market Analysis</Text>}
                                description={<Text style={textStyle}>Review market conditions and economic calendar</Text>}
                                icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                            />
                            <Step
                                title={<Text style={titleStyle}>Strategy Confirmation</Text>}
                                description={<Text style={textStyle}>Ensure trade aligns with your trading plan</Text>}
                                icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                            />
                            <Step
                                title={<Text style={titleStyle}>Risk Assessment</Text>}
                                description={<Text style={textStyle}>Calculate position size and set stop loss</Text>}
                                icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                            />
                            <Step
                                title={<Text style={titleStyle}>Emotional State</Text>}
                                description={<Text style={textStyle}>Confirm you're in the right mental state to trade</Text>}
                                icon={<ClockCircleOutlined style={{ color: '#faad14' }} />}
                            />
                        </Steps>
                    </Card>

                    <Card style={cardStyle}>
                        <Title level={3} style={titleStyle}>Trade Execution Rules</Title>
                        <List
                            dataSource={[
                                'Never risk more than 2% of your account on a single trade',
                                'Always use a stop loss',
                                'Follow your trading plan without exception',
                                'Trade only during your defined session times',
                                'Keep detailed notes for every trade'
                            ]}
                            renderItem={(item) => <List.Item style={textStyle}>{item}</List.Item>}
                        />
                    </Card>

                    <Card style={cardStyle}>
                        <Title level={3} style={titleStyle}>Post-Trade Analysis</Title>
                        <Steps direction="vertical" size="small" current={0}>
                            <Step
                                title={<Text style={titleStyle}>Record Trade Details</Text>}
                                description={<Text style={textStyle}>Log all trade parameters in your journal</Text>}
                                icon={<ExclamationCircleOutlined style={{ color: '#1890ff' }} />}
                            />
                            <Step
                                title={<Text style={titleStyle}>Review Trade Performance</Text>}
                                description={<Text style={textStyle}>Analyze what went right or wrong</Text>}
                                icon={<ExclamationCircleOutlined style={{ color: '#1890ff' }} />}
                            />
                            <Step
                                title={<Text style={titleStyle}>Update Strategy Notes</Text>}
                                description={<Text style={textStyle}>Document any insights for future trades</Text>}
                                icon={<ExclamationCircleOutlined style={{ color: '#1890ff' }} />}
                            />
                        </Steps>
                    </Card>
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <BarChartOutlined style={{ marginRight: 8 }} />
                            Pro Analysis
                        </span>
                    }
                    key="2"
                >
                    <Card
                        style={{
                            ...cardStyle,
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0'
                        }}
                    >
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <Title level={3} style={{ ...titleStyle, textAlign: 'center', marginBottom: 32 }}>
                                Professional Trading Framework
                            </Title>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '24px',
                                marginBottom: '32px'
                            }}>
                                {/* Core Concepts */}
                                <Card
                                    style={{
                                        background: 'white',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                    }}
                                >
                                    <Title level={4} style={{ ...titleStyle, color: '#4f46e5' }}>
                                        <CheckCircleOutlined style={{ marginRight: 8 }} />
                                        Core Principles
                                    </Title>
                                    <List
                                        dataSource={[
                                            'Trade with higher timeframe trend',
                                            'Wait for price to reach key levels',
                                            'Require multiple confirming factors',
                                            'Risk ≤ 1-2% per trade',
                                            'Take partial profits at logical targets'
                                        ]}
                                        renderItem={(item) => (
                                            <List.Item style={{
                                                ...textStyle,
                                                padding: '8px 0',
                                                borderBottom: '1px dashed #e2e8f0'
                                            }}>
                                                {item}
                                            </List.Item>
                                        )}
                                    />
                                </Card>

                                {/* Indicator Setup */}
                                <Card
                                    style={{
                                        background: 'white',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                    }}
                                >
                                    <Title level={4} style={{ ...titleStyle, color: '#4f46e5' }}>
                                        <BarChartOutlined style={{ marginRight: 8 }} />
                                        Indicator Setup
                                    </Title>
                                    <List
                                        dataSource={[
                                            'HTF EMA (Daily/4H trend filter)',
                                            'Fast EMA (9-12 period)',
                                            'Slow EMA (21-26 period)',
                                            'RSI (14 period)',
                                            'ATR (14 period for stops)'
                                        ]}
                                        renderItem={(item) => (
                                            <List.Item style={{
                                                ...textStyle,
                                                padding: '8px 0',
                                                borderBottom: '1px dashed #e2e8f0'
                                            }}>
                                                {item}
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </div>

                            {/* Trading Process */}
                            <Card
                                style={{
                                    background: 'white',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    marginBottom: '32px'
                                }}
                            >
                                <Title level={4} style={{ ...titleStyle, color: '#4f46e5' }}>
                                    <ClockCircleOutlined style={{ marginRight: 8 }} />
                                    Trading Process
                                </Title>
                                <Steps direction="vertical" size="default">
                                    <Step
                                        title={<Text strong style={titleStyle}>1. Trend Analysis</Text>}
                                        description="Confirm direction on higher timeframe (Daily/4H chart)"
                                        icon={<CheckCircleOutlined style={{ color: '#10b981' }} />}
                                    />
                                    <Step
                                        title={<Text strong style={titleStyle}>2. Key Levels</Text>}
                                        description="Identify support/resistance and Fibonacci levels"
                                        icon={<CheckCircleOutlined style={{ color: '#10b981' }} />}
                                    />
                                    <Step
                                        title={<Text strong style={titleStyle}>3. Entry Trigger</Text>}
                                        description="Wait for price action signal at level with RSI confirmation"
                                        icon={<CheckCircleOutlined style={{ color: '#10b981' }} />}
                                    />
                                    <Step
                                        title={<Text strong style={titleStyle}>4. Risk Management</Text>}
                                        description="Set stop loss (1-2% risk) and take profit levels (1:2+ RR)"
                                        icon={<CheckCircleOutlined style={{ color: '#10b981' }} />}
                                    />
                                </Steps>
                            </Card>

                            {/* Best Practices */}
                            <Card
                                style={{
                                    background: 'white',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                }}
                            >
                                <Title level={4} style={{ ...titleStyle, color: '#4f46e5' }}>
                                    <ExclamationCircleOutlined style={{ marginRight: 8 }} />
                                    Best Practices
                                </Title>
                                <List
                                    dataSource={[
                                        'Trade only 2-3 high probability setups per day',
                                        'Avoid trading during news events',
                                        'Wait for London/NY session overlap for best liquidity',
                                        'Review trades weekly to improve execution',
                                        'Keep position sizing consistent'
                                    ]}
                                    renderItem={(item) => (
                                        <List.Item style={{
                                            ...textStyle,
                                            padding: '12px 0',
                                            borderBottom: '1px dashed #e2e8f0'
                                        }}>
                                            <CheckCircleOutlined style={{
                                                color: '#10b981',
                                                marginRight: '12px'
                                            }} />
                                            {item}
                                        </List.Item>
                                    )}
                                />
                            </Card>
                            <Card
                                style={{
                                    background: 'white',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    marginTop: '24px'
                                }}
                            >
                                <Title level={4} style={{ ...titleStyle, color: '#4f46e5' }}>
                                    <BugOutlined style={{ marginRight: 8 }} />
                                    Debug Symbols Guide
                                </Title>

                                <Paragraph style={{ ...textStyle, marginBottom: '24px' }}>
                                    Enable "Show Debug Plots" to see condition symbols on each bar.
                                    This helps identify why signals do/don't appear.
                                </Paragraph>

                                <Divider orientation="left" style={dividerStyle}>Sell Signal Requirements</Divider>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '16px',
                                    marginBottom: '24px'
                                }}>
                                    <Card bordered={false} style={{ background: '#f8fafc' }}>
                                        <Text strong style={{ ...titleStyle, display: 'block', marginBottom: '8px' }}>
                                            <ArrowDownOutlined style={{ color: '#ef4444' }} /> Filtered Sell (SELL)
                                        </Text>
                                        <List
                                            size="small"
                                            dataSource={[
                                                'Requires ALL:',
                                                '• bearishConfluence (BC)',
                                                '• sellSignal (S)',
                                                '• HTF Down (D) if enabled'
                                            ]}
                                            renderItem={(item) => <List.Item style={textStyle}>{item}</List.Item>}
                                        />
                                    </Card>

                                    <Card bordered={false} style={{ background: '#f8fafc' }}>
                                        <Text strong style={{ ...titleStyle, display: 'block', marginBottom: '8px' }}>
                                            <WarningOutlined style={{ color: '#f97316' }} /> bearishConfluence (BC)
                                        </Text>
                                        <List
                                            size="small"
                                            dataSource={[
                                                'EMA Down (↓)',
                                                'AND 1 Price Action:',
                                                '• Bear Pin (P)',
                                                '• Bear Engulf (E)',
                                                '• RSI OB Pull (R)',
                                                'AND 1 Level Condition:',
                                                '• Near Res (N)',
                                                '• Inside Bar (I)'
                                            ]}
                                            renderItem={(item) => <List.Item style={textStyle}>{item}</List.Item>}
                                        />
                                    </Card>
                                </div>

                                <Divider orientation="left" style={dividerStyle}>Troubleshooting Flow</Divider>

                                <Steps direction="vertical" size="small">
                                    <Step
                                        title={<Text strong style={titleStyle}>No SELL symbol?</Text>}
                                        description="Check for sellSignal (S) symbol"
                                        icon={<SearchOutlined style={{ color: '#3b82f6' }} />}
                                    />
                                    <Step
                                        title={<Text strong style={titleStyle}>No S symbol?</Text>}
                                        description={
                                            <>
                                                <div>1. Check bearishConfluence (BC)</div>
                                                <div>2. Verify RSI Trend Down (T) or Near Res (N)</div>
                                            </>
                                        }
                                        icon={<SearchOutlined style={{ color: '#3b82f6' }} />}
                                    />
                                    <Step
                                        title={<Text strong style={titleStyle}>No BC symbol?</Text>}
                                        description={
                                            <>
                                                <div>• Missing EMA Down (↓)?</div>
                                                <div>• No price action trigger?</div>
                                                <div>• No level condition?</div>
                                                <div>• HTF conflict (D missing)?</div>
                                            </>
                                        }
                                        icon={<SearchOutlined style={{ color: '#3b82f6' }} />}
                                    />
                                </Steps>

                                <Alert
                                    message="Remember: All conditions must be met simultaneously for a signal to appear"
                                    type="info"
                                    showIcon
                                    style={{ marginTop: '24px', background: '#f0f9ff' }}
                                />
                            </Card>
                        </div>
                    </Card>
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <BarChartOutlined style={{ marginRight: 8 }} />
                            Professional Trading Rules
                        </span>
                    }
                    key="3"
                >
                    <Card
                        style={{
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}
                    >
                        <Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
                            <CrownOutlined /> Professional Trading Rules
                        </Title>

                        {/* Entry Conditions */}
                        <Card
                            bordered={false}
                            style={{ marginBottom: 24, background: '#f8fafc' }}
                        >
                            <Title level={4} style={{ color: '#1890ff' }}>
                                <ArrowUpOutlined /> Entry Conditions
                            </Title>

                            <Steps direction="vertical" size="small">
                                <Step
                                    title="Buy Setup"
                                    description={
                                        <List size="small">
                                            <List.Item>✅ Higher timeframe trend UP (Green)</List.Item>
                                            <List.Item>✅ Fast EMA above Slow EMA</List.Item>
                                            <List.Item>✅ Buy triangle appears</List.Item>
                                            <List.Item>✅ Near support level</List.Item>
                                            <List.Item>✅ RSI 30-50</List.Item>
                                        </List>
                                    }
                                    icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                                />
                                <Step
                                    title="Sell Setup"
                                    description={
                                        <List size="small">
                                            <List.Item>✅ Higher timeframe trend DOWN (Red)</List.Item>
                                            <List.Item>✅ Fast EMA below Slow EMA</List.Item>
                                            <List.Item>✅ Sell triangle appears</List.Item>
                                            <List.Item>✅ Near resistance level</List.Item>
                                            <List.Item>✅ RSI 50-70</List.Item>
                                        </List>
                                    }
                                    icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                                />
                            </Steps>
                        </Card>

                        {/* No Trade Conditions */}
                        <Card
                            bordered={false}
                            style={{ marginBottom: 24, background: '#fff1f0' }}
                        >
                            <Title level={4} style={{ color: '#ff4d4f' }}>
                                <WarningOutlined /> Avoid Trading When
                            </Title>
                            <List
                                size="small"
                                dataSource={[
                                    '❌ No clear trend (Gray background)',
                                    '❌ Trading against HTF trend',
                                    '❌ RSI >70 for longs or <30 for shorts',
                                    '❌ No nearby support/resistance',
                                    '❌ High volatility (Wide ATR)'
                                ]}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </Card>

                        {/* Risk Management */}
                        <Card
                            bordered={false}
                            style={{ marginBottom: 24, background: '#fff7e6' }}
                        >
                            <Title level={4} style={{ color: '#fa8c16' }}>
                                <LineChartOutlined /> Risk Management
                            </Title>

                            <List
                                size="small"
                                dataSource={[
                                    '🔴 Stop Loss: Below swing low (longs) / Above swing high (shorts)',
                                    '🔴 Max 1.5% risk per trade',
                                    '🟢 TP1: 1:1 (Take 25-33%)',
                                    '🟡 TP2: 1:2 (Take 25-33%)',
                                    '🟠 TP3: 1:3 (Take remainder)',
                                    '💡 Move SL to breakeven after TP1'
                                ]}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </Card>

                        {/* Golden Rules */}
                        <Alert
                            message="Golden Rules"
                            description={
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    <Tag color="blue">Trade WITH the trend</Tag>
                                    <Tag color="blue">Wait for triangle + key level</Tag>
                                    <Tag color="blue">Risk ≤1.5% per trade</Tag>
                                    <Tag color="blue">Cut losses quickly</Tag>
                                    <Tag color="blue">Let winners run</Tag>
                                </div>
                            }
                            type="info"
                            icon={<CrownOutlined />}
                            showIcon
                        />
                    </Card>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default TradingInstructions;