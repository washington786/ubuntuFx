import React, { useState } from 'react';

import {
    Card,
    Typography,
    Row,
    Col,
    Form,
    Input,
    Button,
    Select,
    Divider,
    Switch,
    Space,
    Tag,
    Collapse,
    Slider,
    InputNumber,
    message
} from 'antd';

import {
    SettingOutlined,
    GlobalOutlined,
    BellOutlined,
    SecurityScanOutlined,
    DatabaseOutlined,
    ApiOutlined,
    SyncOutlined,
    ExportOutlined,
    ImportOutlined,
    SaveOutlined,
    ReloadOutlined,
    BarChartOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Option } = Select;

interface SettingsData {
    general: {
        language: string;
        timezone: string;
        dateFormat: string;
        theme: string;
        autoSave: boolean;
    };
    notifications: {
        email: boolean;
        push: boolean;
        sms: boolean;
        tradeExecution: boolean;
        performanceReports: boolean;
        marketNews: boolean;
    };
    trading: {
        defaultPair: string;
        defaultTimeframe: string;
        riskPerTrade: number;
        maxOpenTrades: number;
        stopLossPips: number;
        takeProfitPips: number;
        trailingStop: boolean;
        breakevenActivation: number;
    };
    security: {
        twoFactor: boolean;
        sessionTimeout: number;
        passwordExpiry: number;
        failedAttempts: number;
    };
    data: {
        autoBackup: boolean;
        backupFrequency: string;
        retentionPeriod: number;
        exportFormat: string;
    };
    integrations: {
        mt5Connected: boolean;
        mt5Account: string;
        broker: string;
        apiKey: string;
        webhookUrl: string;
    };
}

const Settings: React.FC = () => {
    const [form] = Form.useForm<SettingsData>();
    const [loading, setLoading] = useState(false);
    const [activePanel, setActivePanel] = useState<string | string[]>(['1']);

    const settingsData: SettingsData = {
        general: {
            language: "English",
            timezone: "GMT-5",
            dateFormat: "MM/DD/YYYY",
            theme: "dark",
            autoSave: true
        },
        notifications: {
            email: true,
            push: false,
            sms: true,
            tradeExecution: true,
            performanceReports: true,
            marketNews: false
        },
        trading: {
            defaultPair: "EUR/USD",
            defaultTimeframe: "H1",
            riskPerTrade: 1.5,
            maxOpenTrades: 5,
            stopLossPips: 50,
            takeProfitPips: 100,
            trailingStop: true,
            breakevenActivation: 30
        },
        security: {
            twoFactor: true,
            sessionTimeout: 30,
            passwordExpiry: 90,
            failedAttempts: 5
        },
        data: {
            autoBackup: true,
            backupFrequency: "daily",
            retentionPeriod: 365,
            exportFormat: "csv"
        },
        integrations: {
            mt5Connected: true,
            mt5Account: "MT5-12345678",
            broker: "MetaQuotes",
            apiKey: "sk_1234567890abcdef",
            webhookUrl: "https://hooks.ubuntufx.com/webhook"
        }
    };

    const onFinish = (values: SettingsData) => {
        setLoading(true);
        console.log('Settings values:', values);

        setTimeout(() => {
            setLoading(false);
            message.success('Settings saved successfully!');
        }, 1500);
    };

    const handleReset = () => {
        form.resetFields();
        message.info('Settings reset to last saved values');
    };

    const handleImport = () => {
        message.info('Import functionality would open file dialog');
    };

    const handleExport = () => {
        message.info('Exporting settings to file...');
        setTimeout(() => {
            message.success('Settings exported successfully!');
        }, 1500);
    };

    const handleTestConnection = () => {
        message.loading('Testing connection...', 1.5);
        setTimeout(() => {
            message.success('Connection successful!');
        }, 1500);
    };

    const handleRegenerateApiKey = () => {
        message.info('API key regenerated');
    };

    const collapseItems = [
        {
            key: '1',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <GlobalOutlined style={{ fontSize: 18, marginRight: 12, color: '#45556c' }} />
                    <span style={{ color: '#314158', fontWeight: 500 }}>General Settings</span>
                </div>
            ),
            children: renderGeneralSettings()
        },
        {
            key: '2',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BellOutlined style={{ fontSize: 18, marginRight: 12, color: '#45556c' }} />
                    <span style={{ color: '#314158', fontWeight: 500 }}>Notifications</span>
                </div>
            ),
            children: renderNotificationSettings()
        },
        {
            key: '3',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BarChartOutlined style={{ fontSize: 18, marginRight: 12, color: '#45556c' }} />
                    <span style={{ color: '#314158', fontWeight: 500 }}>Trading Preferences</span>
                </div>
            ),
            children: renderTradingSettings()
        },
        {
            key: '4',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SecurityScanOutlined style={{ fontSize: 18, marginRight: 12, color: '#45556c' }} />
                    <span style={{ color: '#314158', fontWeight: 500 }}>Security</span>
                </div>
            ),
            children: renderSecuritySettings()
        },
        {
            key: '5',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <DatabaseOutlined style={{ fontSize: 18, marginRight: 12, color: '#45556c' }} />
                    <span style={{ color: '#314158', fontWeight: 500 }}>Data Management</span>
                </div>
            ),
            children: renderDataSettings()
        },
        {
            key: '6',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ApiOutlined style={{ fontSize: 18, marginRight: 12, color: '#45556c' }} />
                    <span style={{ color: '#314158', fontWeight: 500 }}>Integrations</span>
                </div>
            ),
            children: renderIntegrationSettings()
        }
    ];

    function renderGeneralSettings() {
        return (
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item name={['general', 'language']} label="Language">
                        <Select>
                            {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'].map(lang => (
                                <Option key={lang} value={lang.toLowerCase()}>{lang}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item name={['general', 'timezone']} label="Timezone">
                        <Select>
                            {['GMT-12', 'GMT-11', 'GMT-10', 'GMT-9', 'GMT-8', 'GMT-7', 'GMT-6', 'GMT-5', 'GMT-4',
                                'GMT-3', 'GMT-2', 'GMT-1', 'GMT+0', 'GMT+1', 'GMT+2', 'GMT+3', 'GMT+4', 'GMT+5',
                                'GMT+6', 'GMT+7', 'GMT+8', 'GMT+9', 'GMT+10', 'GMT+11', 'GMT+12']
                                .map(tz => (
                                    <Option key={tz} value={tz}>{tz}</Option>
                                ))}
                        </Select>
                    </Form.Item>

                    <Form.Item name={['general', 'dateFormat']} label="Date Format">
                        <Select>
                            {['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD', 'DD MMM YYYY'].map(format => (
                                <Option key={format} value={format}>{format}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item name={['general', 'theme']} label="Theme">
                        <Select>
                            {['Light', 'Dark', 'Auto (System)'].map(theme => (
                                <Option key={theme.split(' ')[0].toLowerCase()} value={theme.split(' ')[0].toLowerCase()}>
                                    {theme}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item name={['general', 'autoSave']} label="Auto Save" valuePropName="checked">
                        <Switch />
                    </Form.Item>

                    <Form.Item label=" ">
                        <Button icon={<ReloadOutlined />}>Reset to Default</Button>
                    </Form.Item>
                </Col>
            </Row>
        );
    }

    function renderNotificationSettings() {
        return (
            <>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item name={['notifications', 'email']} label="Email Notifications" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item name={['notifications', 'push']} label="Push Notifications" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item name={['notifications', 'sms']} label="SMS Notifications" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name={['notifications', 'tradeExecution']} label="Trade Execution Alerts" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item name={['notifications', 'performanceReports']} label="Performance Reports" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item name={['notifications', 'marketNews']} label="Market News" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                    </Col>
                </Row>
            </>
        );
    }

    function renderTradingSettings() {
        return (
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item name={['trading', 'defaultPair']} label="Default Currency Pair">
                        <Select>
                            {['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CAD', 'NZD/USD', 'EUR/GBP', 'EUR/JPY', 'GBP/JPY', 'AUD/JPY']
                                .map(pair => (
                                    <Option key={pair} value={pair}>{pair}</Option>
                                ))}
                        </Select>
                    </Form.Item>

                    <Form.Item name={['trading', 'defaultTimeframe']} label="Default Timeframe">
                        <Select>
                            {['M1 (1 Minute)', 'M5 (5 Minutes)', 'M15 (15 Minutes)', 'M30 (30 Minutes)',
                                'H1 (1 Hour)', 'H4 (4 Hours)', 'D1 (Daily)', 'W1 (Weekly)', 'MN (Monthly)']
                                .map(timeframe => (
                                    <Option key={timeframe.split(' ')[0]} value={timeframe.split(' ')[0]}>
                                        {timeframe}
                                    </Option>
                                ))}
                        </Select>
                    </Form.Item>

                    <Form.Item name={['trading', 'riskPerTrade']} label="Risk Per Trade (%)">
                        <Slider
                            min={0.1}
                            max={5}
                            step={0.1}
                            marks={{ 0.1: '0.1%', 1: '1%', 2: '2%', 3: '3%', 4: '4%', 5: '5%' }}
                        />
                    </Form.Item>

                    <Form.Item name={['trading', 'maxOpenTrades']} label="Maximum Open Trades">
                        <InputNumber min={1} max={20} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item name={['trading', 'stopLossPips']} label="Default Stop Loss (pips)">
                        <InputNumber min={1} max={200} />
                    </Form.Item>

                    <Form.Item name={['trading', 'takeProfitPips']} label="Default Take Profit (pips)">
                        <InputNumber min={1} max={500} />
                    </Form.Item>

                    <Form.Item name={['trading', 'trailingStop']} label="Enable Trailing Stop" valuePropName="checked">
                        <Switch />
                    </Form.Item>

                    <Form.Item name={['trading', 'breakevenActivation']} label="Breakeven Activation (pips)">
                        <InputNumber min={1} max={100} />
                    </Form.Item>
                </Col>
            </Row>
        );
    }

    function renderSecuritySettings() {
        return (
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item name={['security', 'twoFactor']} label="Two-Factor Authentication" valuePropName="checked">
                        <Switch />
                    </Form.Item>

                    <Form.Item name={['security', 'sessionTimeout']} label="Session Timeout (minutes)">
                        <Slider
                            min={5}
                            max={120}
                            step={5}
                            marks={{ 5: '5m', 30: '30m', 60: '1h', 120: '2h' }}
                        />
                    </Form.Item>

                    <Form.Item name={['security', 'passwordExpiry']} label="Password Expiry (days)">
                        <InputNumber min={30} max={365} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item name={['security', 'failedAttempts']} label="Failed Login Attempts">
                        <InputNumber min={1} max={10} />
                    </Form.Item>

                    <Form.Item label=" ">
                        <Space>
                            <Button>Change Password</Button>
                            <Button>View Login History</Button>
                        </Space>
                    </Form.Item>
                </Col>
            </Row>
        );
    }

    function renderDataSettings() {
        return (
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item name={['data', 'autoBackup']} label="Automatic Backups" valuePropName="checked">
                        <Switch />
                    </Form.Item>

                    <Form.Item name={['data', 'backupFrequency']} label="Backup Frequency">
                        <Select>
                            {['Daily', 'Weekly', 'Monthly'].map(freq => (
                                <Option key={freq.toLowerCase()} value={freq.toLowerCase()}>{freq}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item name={['data', 'retentionPeriod']} label="Data Retention Period (days)">
                        <InputNumber min={30} max={1825} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item name={['data', 'exportFormat']} label="Export Format">
                        <Select>
                            {['CSV', 'Excel (XLSX)', 'JSON', 'PDF'].map(format => (
                                <Option key={format.split(' ')[0].toLowerCase()} value={format.split(' ')[0].toLowerCase()}>
                                    {format}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label=" ">
                        <Space>
                            <Button icon={<ExportOutlined />}>Export Data</Button>
                            <Button icon={<SyncOutlined />}>Sync Now</Button>
                        </Space>
                    </Form.Item>
                </Col>
            </Row>
        );
    }

    function renderIntegrationSettings() {
        return (
            <>
                <Card
                    size="small"
                    title="MetaTrader 5 Connection"
                    extra={
                        <Tag color={settingsData.integrations.mt5Connected ? "green" : "red"}>
                            {settingsData.integrations.mt5Connected ? "Connected" : "Disconnected"}
                        </Tag>
                    }
                    style={{ marginBottom: 24 }}
                >
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item name={['integrations', 'mt5Account']} label="MT5 Account Number">
                                <Input />
                            </Form.Item>

                            <Form.Item name={['integrations', 'broker']} label="Broker">
                                <Select>
                                    {['MetaQuotes', 'FxPro', 'IC Markets', 'Pepperstone', 'Other'].map(broker => (
                                        <Option key={broker.toLowerCase()} value={broker.toLowerCase()}>{broker}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item name={['integrations', 'apiKey']} label="API Key">
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label=" ">
                                <Space>
                                    <Button onClick={handleTestConnection}>Test Connection</Button>
                                    <Button onClick={handleRegenerateApiKey}>Regenerate Key</Button>
                                </Space>
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>

                <Card size="small" title="Webhook Integration">
                    <Form.Item name={['integrations', 'webhookUrl']} label="Webhook URL">
                        <Input />
                    </Form.Item>

                    <Form.Item label=" ">
                        <Space>
                            <Button>Test Webhook</Button>
                            <Button>View Documentation</Button>
                        </Space>
                    </Form.Item>
                </Card>
            </>
        );
    }

    return (
        <div>
            <Card style={{
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div>
                        <Title level={2} style={{ margin: 0 }}>
                            <SettingOutlined /> Settings
                        </Title>
                        <Paragraph type="secondary" style={{ margin: '4px 0 0' }}>
                            Configure your Ubuntu FX experience
                        </Paragraph>
                    </div>
                    <Space>
                        <Button icon={<ImportOutlined />} onClick={handleImport}>
                            Import
                        </Button>
                        <Button icon={<ExportOutlined />} onClick={handleExport}>
                            Export
                        </Button>
                        <Button
                            type="primary"
                            icon={<SaveOutlined />}
                            onClick={() => form.submit()}
                            loading={loading}
                        >
                            Save Settings
                        </Button>
                    </Space>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={settingsData}
                >
                    <Collapse
                        bordered={false}
                        activeKey={activePanel}
                        onChange={setActivePanel}
                        expandIconPosition="end"
                        ghost
                        items={collapseItems}
                    />

                    <Divider />

                    <div style={{ textAlign: 'right' }}>
                        <Space>
                            <Button onClick={handleReset}>
                                Reset Changes
                            </Button>
                            <Button
                                type="primary"
                                icon={<SaveOutlined />}
                                onClick={() => form.submit()}
                                loading={loading}
                            >
                                Save Settings
                            </Button>
                        </Space>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default Settings;