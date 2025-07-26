import React, { useState } from 'react';
import {
    Form,
    Input,
    InputNumber,
    Select,
    DatePicker,
    Button,
    Card,
    Row,
    Col,
    Space,
    message,
    Tag
} from 'antd';
import {
    DollarCircleOutlined,
    CheckOutlined
} from '@ant-design/icons';
import moment from 'moment';

const { Option } = Select;

interface TradeFormValues {
    date: moment.Moment;
    pair: string;
    direction: 'buy' | 'sell';
    risk: number;
    profit: number;
    result: 'win' | 'loss' | 'breakeven';
    strategy: string[];
    notes?: string;
}
const strategyOptions: string[] = [
    'Breakout',
    'Trend Following',
    'Mean Reversion',
    'Scalping',
    'Swing Trading',
    'Position Trading',
    'Algorithmic',
    'News Trading'
];

const TradingForm: React.FC = () => {
    const [form] = Form.useForm<TradeFormValues>();
    const [loading, setLoading] = useState(false);

    const onFinish = (values: TradeFormValues) => {
        setLoading(true);
        console.log('Received values:', values);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            message.success('Trade recorded successfully!');
            form.resetFields();
        }, 1500);
    };

    const percentageParser = (value: string | undefined): number => {
        if (!value) return 0.1;
        const parsed = parseFloat(value.replace('%', ''));
        return Math.min(Math.max(parsed, 0.1), 5);
    };

    return (
        <Card
            title="Trade Journal Entry"
            style={{
                maxWidth: 800,
                margin: '0 auto',
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    date: moment(),
                    pair: 'EUR/USD',
                    direction: 'buy',
                    risk: 1,
                    profit: 0,
                    result: 'win'
                }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="date"
                            label={<span style={{ color: '#314158' }}>Trade Date</span>}
                            rules={[{ required: true, message: 'Please select trade date' }]}
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="pair"
                            label={<span style={{ color: '#314158' }}>Currency Pair</span>}
                            rules={[{ required: true, message: 'Please select currency pair' }]}
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
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="direction"
                            label={<span style={{ color: '#314158' }}>Direction</span>}
                            rules={[{ required: true, message: 'Please select direction' }]}
                        >
                            <Select>
                                <Option value="buy">Buy</Option>
                                <Option value="sell">Sell</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="risk"
                            label={<span style={{ color: '#314158' }}>Risk (% of account)</span>}
                            rules={[{ required: true, message: 'Please enter risk percentage' }]}
                        >
                            <InputNumber
                                min={0.1}
                                max={5}
                                step={0.1}
                                formatter={value => `${value}%`}
                                parser={percentageParser}
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="profit"
                            label={<span style={{ color: '#314158' }}>Profit/Loss</span>}
                            rules={[{ required: true, message: 'Please enter profit/loss' }]}
                        >
                            <InputNumber
                                addonBefore={<DollarCircleOutlined />}
                                placeholder="0.00"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="result"
                            label={<span style={{ color: '#314158' }}>Trade Result</span>}
                            rules={[{ required: true, message: 'Please select result' }]}
                        >
                            <Select>
                                <Option value="win">Win</Option>
                                <Option value="loss">Loss</Option>
                                <Option value="breakeven">Breakeven</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    name="strategy"
                    label={<span style={{ color: '#314158' }}>Strategy Used</span>}
                    rules={[{ required: true, message: 'Please select at least one strategy' }]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Select strategies"
                        tagRender={({ label, onClose }) => (
                            <Tag closable onClose={onClose} style={{ marginRight: 3 }}>
                                {label}
                            </Tag>
                        )}
                        style={{ width: '100%' }}
                    >
                        {strategyOptions.map(strategy => (
                            <Option key={strategy} value={strategy}>
                                {strategy}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="notes"
                    label={<span style={{ color: '#314158' }}>Notes</span>}
                >
                    <Input.TextArea rows={4} placeholder="Additional notes about the trade..." />
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            icon={<CheckOutlined />}
                        >
                            Save Trade
                        </Button>
                        <Button
                            htmlType="button"
                            onClick={() => form.resetFields()}
                        >
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default TradingForm;