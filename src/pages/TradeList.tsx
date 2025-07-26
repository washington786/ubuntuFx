/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
    Table,
    Card,
    Button,
    Space,
    Input,
    Select,
    DatePicker,
    Tag,
    Modal,
    message
} from 'antd';
import {
    SearchOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
    FilterOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface Trade {
    key: string;
    date: string;
    pair: string;
    direction: string;
    risk: number;
    profit: number;
    result: string;
    strategy: string;
}

const TradeList: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentTrade, setCurrentTrade] = useState<Trade | null>(null);

    const data: Trade[] = [
        {
            key: '1',
            date: '2023-07-15',
            pair: 'EUR/USD',
            direction: 'Buy',
            risk: 1.2,
            profit: 245.50,
            result: 'Win',
            strategy: 'Breakout'
        },
        {
            key: '2',
            date: '2023-07-14',
            pair: 'GBP/JPY',
            direction: 'Sell',
            risk: 0.8,
            profit: -120.75,
            result: 'Loss',
            strategy: 'Trend Following'
        },
        {
            key: '3',
            date: '2023-07-13',
            pair: 'USD/CAD',
            direction: 'Buy',
            risk: 1.0,
            profit: 180.25,
            result: 'Win',
            strategy: 'Support/Resistance'
        },
        {
            key: '4',
            date: '2023-07-12',
            pair: 'AUD/USD',
            direction: 'Sell',
            risk: 1.5,
            profit: -85.30,
            result: 'Loss',
            strategy: 'Breakout'
        },
        {
            key: '5',
            date: '2023-07-11',
            pair: 'NZD/USD',
            direction: 'Buy',
            risk: 0.9,
            profit: 150.00,
            result: 'Win',
            strategy: 'Trend Following'
        },
    ];

    const columns: ColumnsType<Trade> = [
        {
            title: <span style={{ color: '#314158' }}>Date</span>,
            dataIndex: 'date',
            sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        },
        {
            title: <span style={{ color: '#314158' }}>Pair</span>,
            dataIndex: 'pair',
            filters: [
                { text: 'EUR/USD', value: 'EUR/USD' },
                { text: 'GBP/JPY', value: 'GBP/JPY' },
                { text: 'USD/JPY', value: 'USD/JPY' },
                { text: 'AUD/USD', value: 'AUD/USD' },
                { text: 'USD/CAD', value: 'USD/CAD' },
                { text: 'NZD/USD', value: 'NZD/USD' },
            ],
            onFilter: (value, record) => record.pair === value,
        },
        {
            title: <span style={{ color: '#314158' }}>Direction</span>,
            dataIndex: 'direction',
            render: (direction: string) => (
                <Tag color={direction === 'Buy' ? 'green' : 'red'}>{direction}</Tag>
            ),
            filters: [
                { text: 'Buy', value: 'Buy' },
                { text: 'Sell', value: 'Sell' },
            ],
            onFilter: (value, record) => record.direction === value,
        },
        {
            title: <span style={{ color: '#314158' }}>Risk (%)</span>,
            dataIndex: 'risk',
            sorter: (a, b) => a.risk - b.risk,
        },
        {
            title: <span style={{ color: '#314158' }}>Profit ($)</span>,
            dataIndex: 'profit',
            sorter: (a, b) => a.profit - b.profit,
            render: (profit: number) => (
                <span style={{ color: profit >= 0 ? '#52c41a' : '#ff4d4f' }}>
                    {profit >= 0 ? `+$${profit}` : `-$${Math.abs(profit)}`}
                </span>
            ),
        },
        {
            title: <span style={{ color: '#314158' }}>Result</span>,
            dataIndex: 'result',
            render: (result: string) => (
                <Tag color={result === 'Win' ? 'green' : result === 'Loss' ? 'red' : 'blue'}>
                    {result}
                </Tag>
            ),
            filters: [
                { text: 'Win', value: 'Win' },
                { text: 'Loss', value: 'Loss' },
                { text: 'Breakeven', value: 'Breakeven' },
            ],
            onFilter: (value, record) => record.result === value,
        },
        {
            title: <span style={{ color: '#314158' }}>Strategy</span>,
            dataIndex: 'strategy',
        },
        {
            title: <span style={{ color: '#314158' }}>Actions</span>,
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type="link"
                        icon={<EyeOutlined />}
                        onClick={() => showTradeDetails(record)}
                    />
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => editTrade(record)}
                    />
                    <Button
                        type="link"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => deleteTrade(record.key)}
                    />
                </Space>
            ),
        },
    ];

    const showTradeDetails = (trade: Trade) => {
        setCurrentTrade(trade);
        setIsModalVisible(true);
    };

    const editTrade = (trade: Trade) => {
        message.info(`Editing trade: ${trade.pair}`);
        // Implement edit functionality
    };

    const deleteTrade = (key: string) => {
        console.log('====================================');
        console.log(key);
        console.log('====================================');
        Modal.confirm({
            title: 'Delete Trade',
            content: 'Are you sure you want to delete this trade?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                message.success('Trade deleted successfully');
                // Implement delete functionality
            },
        });
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedKeys: React.Key[]) => {
            setSelectedRowKeys(selectedKeys);
        },
    };

    const handleDeleteSelected = () => {
        if (selectedRowKeys.length === 0) {
            message.warning('Please select trades to delete');
            return;
        }

        Modal.confirm({
            title: 'Delete Selected Trades',
            content: `Are you sure you want to delete ${selectedRowKeys.length} selected trades?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                message.success(`${selectedRowKeys.length} trades deleted successfully`);
                setSelectedRowKeys([]);
                // Implement delete functionality
            },
        });
    };

    return (
        <Card
            title={<span style={{ color: '#314158' }}>Trade History</span>}
            extra={
                <Space>
                    <Button type="primary" icon={<PlusOutlined />}>
                        Add Trade
                    </Button>
                </Space>
            }
            style={{
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
        >
            <div style={{ marginBottom: 16 }}>
                <Space wrap>
                    <Input placeholder="Search trades..." prefix={<SearchOutlined />} style={{ width: 200 }} />
                    <Select placeholder="Filter by pair" style={{ width: 150 }} allowClear>
                        <Option value="EUR/USD">EUR/USD</Option>
                        <Option value="GBP/JPY">GBP/JPY</Option>
                        <Option value="USD/JPY">USD/JPY</Option>
                        <Option value="AUD/USD">AUD/USD</Option>
                        <Option value="USD/CAD">USD/CAD</Option>
                        <Option value="NZD/USD">NZD/USD</Option>
                    </Select>
                    <Select placeholder="Filter by result" style={{ width: 150 }} allowClear>
                        <Option value="Win">Win</Option>
                        <Option value="Loss">Loss</Option>
                        <Option value="Breakeven">Breakeven</Option>
                    </Select>
                    <RangePicker placeholder={['Start Date', 'End Date']} />
                    <Button icon={<FilterOutlined />}>Filter</Button>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={handleDeleteSelected}
                        disabled={selectedRowKeys.length === 0}
                    >
                        Delete Selected
                    </Button>
                </Space>
            </div>

            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
                scroll={{ x: 800 }}
                style={{ background: '#ffffff' }}
            />

            <Modal
                title="Trade Details"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
                width={600}
            >
                {currentTrade && (
                    <div>
                        <p><strong>Date:</strong> {currentTrade.date}</p>
                        <p><strong>Pair:</strong> {currentTrade.pair}</p>
                        <p><strong>Direction:</strong> <Tag color={currentTrade.direction === 'Buy' ? 'green' : 'red'}>{currentTrade.direction}</Tag></p>
                        <p><strong>Risk:</strong> {currentTrade.risk}%</p>
                        <p><strong>Profit:</strong> <span style={{ color: currentTrade.profit >= 0 ? '#52c41a' : '#ff4d4f' }}>
                            {currentTrade.profit >= 0 ? `+$${currentTrade.profit}` : `-$${Math.abs(currentTrade.profit)}`}
                        </span></p>
                        <p><strong>Result:</strong> <Tag color={currentTrade.result === 'Win' ? 'green' : currentTrade.result === 'Loss' ? 'red' : 'blue'}>
                            {currentTrade.result}
                        </Tag></p>
                        <p><strong>Strategy:</strong> {currentTrade.strategy}</p>
                    </div>
                )}
            </Modal>
        </Card>
    );
};

export default TradeList;