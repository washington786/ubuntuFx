/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
    Card,
    Form,
    Select,
    InputNumber,
    Button,
    Typography,
    Progress,
    Row,
    Col,
    Statistic,
    Divider
} from 'antd';
import {
    BarChartOutlined,
    DollarCircleOutlined,
    RiseOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const { Title, Text } = Typography;
const { Option } = Select;

const SmartAnalyzer: React.FC = () => {
    const [analysisResult, setAnalysisResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);
        console.log('Analysis values:', values);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setAnalysisResult({
                recommendation: 'Take Trade',
                confidence: 85,
                riskReward: 2.1,
                winProbability: 72,
                expectedValue: 0.45,
                details: [
                    { factor: 'Technical Setup', score: 90, weight: 30 },
                    { factor: 'Market Conditions', score: 75, weight: 25 },
                    { factor: 'Economic Calendar', score: 80, weight: 20 },
                    { factor: 'Historical Performance', score: 70, weight: 15 },
                    { factor: 'Risk Management', score: 85, weight: 10 },
                ]
            });
        }, 1500);
    };

    const COLORS = ['#52c41a', '#ff4d4f', '#faad14', '#1890ff', '#722ed1'];

    return (
        <div>
            <Card style={{
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <Title level={2} style={{ color: '#314158' }}>
                    <BarChartOutlined /> Smart Trade Analyzer
                </Title>
                <Text style={{ color: '#62748e' }}>Analyze potential trades with our AI-powered recommendation system</Text>
            </Card>

            <Row gutter={24} style={{ marginTop: 24 }}>
                <Col span={12}>
                    <Card title={<span style={{ color: '#314158' }}>Trade Parameters</span>} style={{
                        background: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{
                                pair: 'EUR/USD',
                                direction: 'buy',
                                entry: 1.1234,
                                stopLoss: 1.1200,
                                takeProfit: 1.1300,
                                accountRisk: 1,
                            }}
                        >
                            <Form.Item
                                name="pair"
                                label={<span style={{ color: '#314158' }}>Currency Pair</span>}
                                rules={[{ required: true }]}
                            >
                                <Select>
                                    <Option value="EUR/USD">EUR/USD</Option>
                                    <Option value="GBP/USD">GBP/USD</Option>
                                    <Option value="USD/JPY">USD/JPY</Option>
                                    <Option value="AUD/USD">AUD/USD</Option>
                                    <Option value="USD/CAD">USD/CAD</Option>
                                    <Option value="NZD/USD">NZD/USD</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="direction"
                                label={<span style={{ color: '#314158' }}>Direction</span>}
                                rules={[{ required: true }]}
                            >
                                <Select>
                                    <Option value="buy">Buy</Option>
                                    <Option value="sell">Sell</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="entry"
                                label={<span style={{ color: '#314158' }}>Entry Price</span>}
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                name="stopLoss"
                                label={<span style={{ color: '#314158' }}>Stop Loss</span>}
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                name="takeProfit"
                                label={<span style={{ color: '#314158' }}>Take Profit</span>}
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                name="accountRisk"
                                label={<span style={{ color: '#314158' }}>Account Risk (%)</span>}
                                rules={[{ required: true }]}
                            >
                                <InputNumber min={0.1} max={5} step={0.1} style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading} block>
                                    Analyze Trade
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                <Col span={12}>
                    {analysisResult ? (
                        <Card title={<span style={{ color: '#314158' }}>Analysis Results</span>} style={{
                            background: '#ffffff',
                            borderRadius: '8px',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                                <div style={{ fontSize: 24, fontWeight: 'bold', color: analysisResult.recommendation === 'Take Trade' ? '#52c41a' : '#ff4d4f' }}>
                                    {analysisResult.recommendation}
                                </div>
                                <div style={{ marginTop: 8, color: '#62748e' }}>
                                    Confidence: <strong>{analysisResult.confidence}%</strong>
                                </div>
                            </div>

                            <Progress
                                percent={analysisResult.confidence}
                                status={analysisResult.recommendation === 'Take Trade' ? 'success' : 'exception'}
                                showInfo={false}
                                strokeColor={analysisResult.recommendation === 'Take Trade' ? '#52c41a' : '#ff4d4f'}
                            />

                            <Row gutter={16} style={{ marginTop: 24 }}>
                                <Col span={12}>
                                    <Card size="small" style={{
                                        background: '#f8fafc',
                                        borderRadius: '4px'
                                    }}>
                                        <Statistic
                                            title={<span style={{ color: '#62748e' }}>Risk/Reward Ratio</span>}
                                            value={analysisResult.riskReward}
                                            precision={2}
                                            valueStyle={{ color: analysisResult.riskReward > 2 ? '#52c41a' : '#faad14' }}
                                            prefix={<DollarCircleOutlined />}
                                        />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card size="small" style={{
                                        background: '#f8fafc',
                                        borderRadius: '4px'
                                    }}>
                                        <Statistic
                                            title={<span style={{ color: '#62748e' }}>Win Probability</span>}
                                            value={analysisResult.winProbability}
                                            suffix="%"
                                            valueStyle={{ color: analysisResult.winProbability > 60 ? '#52c41a' : '#ff4d4f' }}
                                            prefix={<RiseOutlined />}
                                        />
                                    </Card>
                                </Col>
                            </Row>

                            <Divider style={{ borderColor: '#e2e8f0' }} />

                            <div style={{ marginBottom: 16 }}>
                                <Text strong style={{ color: '#314158' }}>Analysis Factors</Text>
                            </div>

                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={analysisResult.details}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="score"
                                        nameKey="factor"
                                        label={({ name, percent }) => `${name}: ${(percent! * 100).toFixed(0)}%`}
                                    >
                                        {analysisResult.details.map((entry: any, index: number) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            background: '#ffffff',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>

                            <div style={{ marginTop: 24 }}>
                                <Button type="primary" icon={<CheckCircleOutlined />} block>
                                    Execute Trade
                                </Button>
                            </div>
                        </Card>
                    ) : (
                        <Card title={<span style={{ color: '#314158' }}>Analysis Results</span>} style={{
                            background: '#ffffff',
                            borderRadius: '8px',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <Text type="secondary">Enter trade parameters and click "Analyze Trade"</Text>
                            </div>
                        </Card>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default SmartAnalyzer;