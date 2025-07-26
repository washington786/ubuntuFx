import React, { useState, type FC } from 'react';
import {
    Card,
    Typography,
    Row,
    Col,
    Form,
    Input,
    Button,
    Avatar,
    Upload,
    Select,
    Divider,
    Switch,
    Space,
    Tag,
    Statistic,
    Progress,
    List,
    Tabs
} from 'antd';
import {
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    UploadOutlined,
    LockOutlined,
    NotificationOutlined,
    DollarCircleOutlined,
    BarChartOutlined,
    TrophyOutlined,
    EditOutlined,
    SaveOutlined
} from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

interface Achievement {
    title: string;
    date: string;
    icon: React.ReactNode;
}

interface TradingPreferences {
    experience: string;
    preferredPairs: string[];
    riskLevel: string;
    accountSize: number;
    monthlyGoal: number;
}

interface NotificationSettings {
    email: boolean;
    push: boolean;
    sms: boolean;
    execution?: boolean;
    reports?: boolean;
    news?: boolean;
}

interface UserData {
    name: string;
    email: string;
    phone: string;
    memberSince: string;
    avatar: string;
    timezone: string;
    currency: string;
    notifications: NotificationSettings;
    trading: TradingPreferences;
    achievements: Achievement[];
}

const Profile: FC = () => {
    const [form] = Form.useForm();
    const [activeTab, setActiveTab] = useState('1');
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const userData: UserData = {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1 (555) 123-4567",
        memberSince: "January 2022",
        avatar: "",
        timezone: "GMT-5",
        currency: "USD",
        notifications: {
            email: true,
            push: false,
            sms: true,
            execution: true,
            reports: true,
            news: false
        },
        trading: {
            experience: "Intermediate",
            preferredPairs: ["EUR/USD", "GBP/USD", "USD/JPY"],
            riskLevel: "Medium",
            accountSize: 15000,
            monthlyGoal: 2000
        },
        achievements: [
            { title: "First Trade", date: "Jan 15, 2022", icon: <TrophyOutlined /> },
            { title: "100 Trades Completed", date: "Jun 3, 2022", icon: <TrophyOutlined /> },
            { title: "Monthly Profit Goal", date: "Oct 12, 2022", icon: <TrophyOutlined /> },
            { title: "Consistency Master", date: "Feb 28, 2023", icon: <TrophyOutlined /> }
        ]
    };

    const onFinish = (values: Partial<UserData>) => {
        setLoading(true);
        console.log('Profile values:', values);
        setTimeout(() => {
            setLoading(false);
            setIsEditing(false);
        }, 1500);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsEditing(false);
    };

    const handleUploadChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const renderProfileForm = () => (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                timezone: userData.timezone,
                currency: userData.currency
            }}
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please enter your full name' }]}
                    >
                        <Input placeholder="Enter your full name" disabled={!isEditing} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' }
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Enter your email" disabled={!isEditing} />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="phone" label="Phone Number">
                        <Input prefix={<PhoneOutlined />} placeholder="Enter your phone number" disabled={!isEditing} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="timezone" label="Timezone">
                        <Select disabled={!isEditing}>
                            {['GMT-12', 'GMT-11', 'GMT-10', 'GMT-9', 'GMT-8', 'GMT-7', 'GMT-6', 'GMT-5', 'GMT-4',
                                'GMT-3', 'GMT-2', 'GMT-1', 'GMT+0', 'GMT+1', 'GMT+2', 'GMT+3', 'GMT+4', 'GMT+5',
                                'GMT+6', 'GMT+7', 'GMT+8', 'GMT+9', 'GMT+10', 'GMT+11', 'GMT+12']
                                .map(tz => (
                                    <Option key={tz} value={tz}>
                                        {tz}
                                    </Option>
                                ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="currency" label="Preferred Currency">
                        <Select disabled={!isEditing}>
                            {['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF'].map(currency => (
                                <Option key={currency} value={currency}>
                                    {currency}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="avatar" label="Profile Picture" valuePropName="fileList">
                        <Upload
                            fileList={fileList}
                            onChange={handleUploadChange}
                            beforeUpload={() => false}
                            disabled={!isEditing}
                        >
                            <Button icon={<UploadOutlined />} disabled={!isEditing}>
                                Click to upload
                            </Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>

            <Divider />

            <div style={{ textAlign: 'right' }}>
                {isEditing ? (
                    <Space>
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit" loading={loading} icon={<SaveOutlined />}>
                            Save Changes
                        </Button>
                    </Space>
                ) : (
                    <Button type="primary" icon={<EditOutlined />} onClick={() => setIsEditing(true)}>
                        Edit Profile
                    </Button>
                )}
            </div>
        </Form>
    );

    const renderSecuritySettings = () => (
        <Row gutter={16}>
            <Col span={12}>
                <Card size="small">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <Text strong>Change Password</Text>
                            <Paragraph type="secondary" style={{ margin: '4px 0 0' }}>
                                Update your password regularly
                            </Paragraph>
                        </div>
                        <Button icon={<LockOutlined />}>Change</Button>
                    </div>
                </Card>
            </Col>
            <Col span={12}>
                <Card size="small">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <Text strong>Two-Factor Authentication</Text>
                            <Paragraph type="secondary" style={{ margin: '4px 0 0' }}>
                                Add an extra layer of security
                            </Paragraph>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </Card>
            </Col>
        </Row>
    );

    const renderTradingPreferences = () => (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Trading Experience">
                        <Select defaultValue={userData.trading.experience}>
                            {['Beginner', 'Intermediate', 'Advanced', 'Professional'].map(level => (
                                <Option key={level} value={level.toLowerCase()}>{level}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Risk Tolerance">
                        <Select defaultValue={userData.trading.riskLevel}>
                            {['Low', 'Medium', 'High'].map(risk => (
                                <Option key={risk} value={risk}>{risk} Risk</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item label="Preferred Currency Pairs">
                        <Select
                            mode="multiple"
                            defaultValue={userData.trading.preferredPairs}
                            placeholder="Select currency pairs"
                        >
                            {['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CAD', 'NZD/USD', 'EUR/GBP', 'EUR/JPY', 'GBP/JPY', 'AUD/JPY']
                                .map(pair => (
                                    <Option key={pair} value={pair}>{pair}</Option>
                                ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Account Size ($)">
                        <Input prefix={<DollarCircleOutlined />} defaultValue={userData.trading.accountSize.toString()} />
                    </Form.Item>
                </Col>
            </Row>

            <Divider />

            <div style={{ textAlign: 'right' }}>
                <Button type="primary" icon={<SaveOutlined />}>Save Preferences</Button>
            </div>
        </>
    );

    const renderPerformanceGoals = () => (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Card size="small">
                        <Statistic
                            title="Account Size"
                            value={userData.trading.accountSize}
                            precision={2}
                            prefix={<DollarCircleOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card size="small">
                        <Statistic
                            title="Monthly Profit Goal"
                            value={userData.trading.monthlyGoal}
                            precision={2}
                            valueStyle={{ color: '#52c41a' }}
                            prefix={<DollarCircleOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            <div style={{ marginTop: 24 }}>
                <Text strong>Goal Progress</Text>
                <Progress percent={65} strokeColor="#52c41a" style={{ marginTop: 8 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    <Text type="secondary">$0</Text>
                    <Text type="secondary">${userData.trading.monthlyGoal}</Text>
                </div>
            </div>
        </>
    );

    const notificationItems = [
        { title: "Email Notifications", description: "Receive important updates via email", key: "email" },
        { title: "Push Notifications", description: "Get real-time alerts", key: "push" },
        { title: "SMS Notifications", description: "Receive critical alerts via text", key: "sms" },
        { title: "Trade Execution Alerts", description: "Notify when trades are executed", key: "execution" },
        { title: "Performance Reports", description: "Weekly and monthly summaries", key: "reports" },
        { title: "Market News", description: "Important market updates", key: "news" }
    ];

    const renderNotifications = () => (
        <List
            itemLayout="horizontal"
            dataSource={notificationItems}
            renderItem={item => (
                <List.Item
                    actions={[
                        <Switch defaultChecked={!!userData.notifications[item.key as keyof NotificationSettings]} />
                    ]}
                >
                    <List.Item.Meta
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    );

    const renderAchievements = () => (
        <List
            itemLayout="horizontal"
            dataSource={userData.achievements}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <div style={{
                                background: '#e6f4ea',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                        }
                        title={item.title}
                        description={`Earned on ${item.date}`}
                    />
                </List.Item>
            )}
        />
    );

    const renderTradingStats = () => (
        <Row gutter={16}>
            {[
                { title: "Total Trades", value: 842, color: '#314158' },
                { title: "Win Rate", value: 68, suffix: '%', color: '#52c41a' },
                { title: "Profit Factor", value: 1.85, precision: 2, color: '#52c41a' },
                { title: "Max Drawdown", value: 12.4, suffix: '%', color: '#ff4d4f' }
            ].map((stat, index) => (
                <Col span={6} key={index}>
                    <Card size="small">
                        <Statistic {...stat} />
                    </Card>
                </Col>
            ))}
        </Row>
    );

    const tabItems = [
        {
            key: '1',
            label: (
                <span>
                    <UserOutlined />
                    Profile
                </span>
            ),
            children: (
                <>
                    <Card title="Personal Information" style={{ marginBottom: 24, background: '#f8fafc', borderRadius: '8px' }}>
                        {renderProfileForm()}
                    </Card>
                    <Card title="Security Settings" style={{ marginBottom: 24, background: '#f8fafc', borderRadius: '8px' }}>
                        {renderSecuritySettings()}
                    </Card>
                </>
            )
        },
        {
            key: '2',
            label: (
                <span>
                    <BarChartOutlined />
                    Trading Preferences
                </span>
            ),
            children: (
                <>
                    <Card title="Trading Settings" style={{ marginBottom: 24, background: '#f8fafc', borderRadius: '8px' }}>
                        {renderTradingPreferences()}
                    </Card>
                    <Card title="Performance Goals" style={{ background: '#f8fafc', borderRadius: '8px' }}>
                        {renderPerformanceGoals()}
                    </Card>
                </>
            )
        },
        {
            key: '3',
            label: (
                <span>
                    <NotificationOutlined />
                    Notifications
                </span>
            ),
            children: (
                <Card title="Notification Preferences" style={{ background: '#f8fafc', borderRadius: '8px' }}>
                    {renderNotifications()}
                </Card>
            )
        },
        {
            key: '4',
            label: (
                <span>
                    <TrophyOutlined />
                    Achievements
                </span>
            ),
            children: (
                <>
                    <Card title="Your Achievements" style={{ background: '#f8fafc', borderRadius: '8px' }}>
                        {renderAchievements()}
                    </Card>
                    <Card title="Trading Statistics" style={{ marginTop: 24, background: '#f8fafc', borderRadius: '8px' }}>
                        {renderTradingStats()}
                    </Card>
                </>
            )
        }
    ];

    return (
        <div>
            <Card style={{
                background: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                    <Avatar
                        size={80}
                        icon={<UserOutlined />}
                        src={userData.avatar}
                        style={{
                            background: '#45556c',
                            marginRight: 24,
                            border: '2px solid #e2e8f0'
                        }}
                    />
                    <div>
                        <Title level={3} style={{ margin: 0 }}>{userData.name}</Title>
                        <Paragraph type="secondary" style={{ margin: '4px 0 0' }}>
                            Member since {userData.memberSince}
                        </Paragraph>
                        <Tag color="blue" style={{ marginTop: 8 }}>Pro Trader</Tag>
                    </div>
                </div>

                <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
            </Card>
        </div>
    );
};

export default Profile;