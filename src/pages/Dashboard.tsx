import React from 'react';
import { Row, Col, Card, Statistic, Button } from 'antd';
import {
    RiseOutlined,
    FallOutlined,
    DollarCircleOutlined,
    BarChartOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard: React.FC = () => {
    // Mock data for charts
    const profitLossData = [
        { date: 'Jan', profit: 4000, loss: 2400 },
        { date: 'Feb', profit: 3000, loss: 1398 },
        { date: 'Mar', profit: 2000, loss: 9800 },
        { date: 'Apr', profit: 2780, loss: 3908 },
        { date: 'May', profit: 1890, loss: 4800 },
        { date: 'Jun', profit: 2390, loss: 3800 },
        { date: 'Jul', profit: 3490, loss: 4300 },
    ];

    const tradeStats = [
        { title: 'Total Trades', value: 128, icon: <BarChartOutlined /> },
        { title: 'Win Rate', value: '68%', icon: <RiseOutlined /> },
        { title: 'Profit Factor', value: '1.85', icon: <DollarCircleOutlined /> },
        { title: 'Avg. Win', value: '$245', icon: <RiseOutlined /> },
        { title: 'Avg. Loss', value: '$120', icon: <FallOutlined /> },
        { title: 'Max Drawdown', value: '12.4%', icon: <FallOutlined /> },
    ];

    return (
        <div>
            <Row gutter={16} style={{ marginBottom: 24 }}>
                <Col span={24}>
                    <Card title="Performance Overview" extra={
                        <Button type="primary" icon={<PlusOutlined />}>
                            Add Trade
                        </Button>
                    } style={{
                        background: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={profitLossData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="date" stroke="#62748e" />
                                <YAxis stroke="#62748e" />
                                <Tooltip
                                    contentStyle={{
                                        background: '#ffffff',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '4px'
                                    }}
                                />
                                <Area type="monotone" dataKey="profit" stackId="1" stroke="#52c41a" fill="#e6f4ea" name="Profit" />
                                <Area type="monotone" dataKey="loss" stackId="1" stroke="#ff4d4f" fill="#fff2f0" name="Loss" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                {tradeStats.map((stat, index) => (
                    <Col span={8} key={index}>
                        <Card style={{
                            background: '#ffffff',
                            borderRadius: '8px',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}>
                            <Statistic
                                title={<span style={{ color: '#62748e' }}>{stat.title}</span>}
                                value={stat.value}
                                prefix={stat.icon}
                                valueStyle={{ color: '#314158' }}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={12}>
                    <Card title="Recent Trades" style={{
                        background: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <table className="ant-table" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '12px 8px', color: '#62748e', borderBottom: '1px solid #e2e8f0' }}>Date</th>
                                    <th style={{ padding: '12px 8px', color: '#62748e', borderBottom: '1px solid #e2e8f0' }}>Pair</th>
                                    <th style={{ padding: '12px 8px', color: '#62748e', borderBottom: '1px solid #e2e8f0' }}>Result</th>
                                    <th style={{ padding: '12px 8px', color: '#62748e', borderBottom: '1px solid #e2e8f0' }}>Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>2023-07-15</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>EUR/USD</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>Win</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0', color: '#52c41a' }}>+$245</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>2023-07-14</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>GBP/JPY</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>Loss</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0', color: '#ff4d4f' }}>-$120</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>2023-07-13</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>USD/CAD</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0' }}>Win</td>
                                    <td style={{ padding: '12px 8px', borderBottom: '1px solid #e2e8f0', color: '#52c41a' }}>+$180</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Trading Summary" style={{
                        background: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ textAlign: 'center', padding: '24px 0' }}>
                            <div style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#314158' }}>
                                Monthly Performance
                            </div>
                            <div style={{ fontSize: 36, color: '#52c41a', marginBottom: 8 }}>
                                +$1,245
                            </div>
                            <div style={{ color: '#62748e' }}>
                                18 Wins / 7 Losses
                            </div>
                            <div style={{ marginTop: 24 }}>
                                <Button type="primary">View Full Report</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;