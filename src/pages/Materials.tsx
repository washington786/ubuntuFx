import React, { useState } from 'react';
import {
    Card,
    Typography,
    Row,
    Col,
    Button,
    Tabs,
    Input,
    Tag,
    Collapse,
    Space,
    List,
    Avatar,
    Empty
} from 'antd';
import {
    BookOutlined,
    CodeOutlined,
    DownloadOutlined,
    SearchOutlined,
    FilePdfOutlined,
    VideoCameraOutlined,
    RobotOutlined,
    ToolOutlined,
    LinkOutlined,
    StarOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

interface Resource {
    id: number;
    title: string;
    description: string;
    type: string;
    tags: string[];
    link: string;
    level?: string;
    category?: string;
    rating?: number;
    downloads?: number;
}

interface VideoResource {
    id: number;
    title: string;
    description: string;
    duration: string;
}

const developerResources: Resource[] = [
    {
        id: 1,
        title: "JavaScript for Traders",
        description: "Learn JavaScript basics with trading applications",
        type: "Book",
        level: "Beginner",
        category: "Programming",
        tags: ["JavaScript", "Basics"],
        link: "#"
    },
    {
        id: 2,
        title: "React for Financial Applications",
        description: "Build trading dashboards with React",
        type: "Course",
        level: "Intermediate",
        category: "Frontend",
        tags: ["React", "UI/UX"],
        link: "#"
    },
    {
        id: 3,
        title: "Node.js Trading Bot Framework",
        description: "Create automated trading systems with Node.js",
        type: "Framework",
        level: "Advanced",
        category: "Backend",
        tags: ["Node.js", "Bots"],
        link: "#"
    },
    {
        id: 4,
        title: "Python for Algorithmic Trading",
        description: "Master quantitative trading with Python",
        type: "Book",
        level: "Intermediate",
        category: "Programming",
        tags: ["Python", "Algorithms"],
        link: "#"
    }
];

const mql5Scripts: Resource[] = [
    {
        id: 1,
        title: "Smart Trend Detector",
        description: "Detects trend reversals with 85% accuracy",
        type: "Indicator",
        rating: 4.7,
        downloads: 12450,
        tags: ["Trend", "Reversal"],
        link: "#"
    },
    {
        id: 2,
        title: "Auto Risk Manager",
        description: "Automatically adjusts lot size based on account risk",
        type: "Expert Advisor",
        rating: 4.9,
        downloads: 8760,
        tags: ["Risk Management", "Money Management"],
        link: "#"
    },
    {
        id: 3,
        title: "News Trader EA",
        description: "Executes trades based on economic news releases",
        type: "Expert Advisor",
        rating: 4.5,
        downloads: 15620,
        tags: ["News Trading", "Automation"],
        link: "#"
    },
    {
        id: 4,
        title: "Multi-Timeframe Scanner",
        description: "Scans multiple timeframes for trading opportunities",
        type: "Indicator",
        rating: 4.8,
        downloads: 9870,
        tags: ["Scanner", "Multi-TF"],
        link: "#"
    }
];

const tradingResources: Resource[] = [
    {
        id: 1,
        title: "Price Action Mastery",
        description: "Complete guide to price action trading",
        type: "PDF Guide",
        level: "All Levels",
        category: "Strategy",
        tags: ["Price Action", "Patterns"],
        link: "#"
    },
    {
        id: 2,
        title: "Risk Management Blueprint",
        description: "Essential risk management techniques for traders",
        type: "Video Series",
        level: "Beginner",
        category: "Psychology",
        tags: ["Risk", "Psychology"],
        link: "#"
    },
    {
        id: 3,
        title: "Forex Market Structure",
        description: "Understanding market structure and institutional orders",
        type: "Webinar",
        level: "Intermediate",
        category: "Analysis",
        tags: ["Market Structure", "Institutions"],
        link: "#"
    }
];

const videoTutorials: VideoResource[] = [
    {
        id: 1,
        title: "Building Your First Trading Bot",
        description: "Learn to create automated trading systems",
        duration: "32 min"
    },
    {
        id: 2,
        title: "Advanced Risk Management",
        description: "Professional techniques for capital preservation",
        duration: "45 min"
    },
    {
        id: 3,
        title: "Market Analysis Techniques",
        description: "How to analyze markets like a professional",
        duration: "28 min"
    }
];

const learningPaths = [
    {
        title: "Beginner Developer Path",
        items: [
            "Learn JavaScript fundamentals",
            "Understand HTML/CSS for web interfaces",
            "Build simple trading dashboards with React",
            "Create basic trading bots with Node.js",
            "Learn to connect to trading APIs"
        ]
    },
    {
        title: "Intermediate Developer Path",
        items: [
            "Master React state management",
            "Learn TypeScript for type safety",
            "Build real-time data visualization",
            "Create advanced trading algorithms",
            "Implement backtesting frameworks"
        ]
    },
    {
        title: "Advanced Developer Path",
        items: [
            "Develop high-frequency trading systems",
            "Implement machine learning models",
            "Build distributed trading architectures",
            "Create custom charting libraries",
            "Optimize performance for large datasets"
        ]
    }
];

const Materials: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('1');

    const filterResources = (resources: Resource[]) => {
        return resources.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    };

    const renderResourceCard = (resource: Resource) => (
        <Card
            size="small"
            style={{ marginBottom: 16 }}
            actions={[
                <Button type="link" icon={<DownloadOutlined />} key="download">
                    Download
                </Button>,
                <Button type="link" icon={<LinkOutlined />} key="view">
                    View Details
                </Button>
            ]}
        >
            <Card.Meta
                title={<Text strong>{resource.title}</Text>}
                description={
                    <>
                        <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                            {resource.description}
                        </Paragraph>
                        <Space size={[4, 8]} wrap>
                            <Tag color="blue">{resource.type}</Tag>
                            {resource.level && <Tag color="green">{resource.level}</Tag>}
                            {resource.rating && (
                                <Tag color="gold" icon={<StarOutlined />}>
                                    {resource.rating}
                                </Tag>
                            )}
                            {resource.downloads && <Tag color="purple">{resource.downloads} downloads</Tag>}
                            {resource.tags.map((tag, index) => (
                                <Tag key={index} color="geekblue">{tag}</Tag>
                            ))}
                        </Space>
                    </>
                }
            />
        </Card>
    );

    const renderVideoCard = (video: VideoResource) => (
        <Card
            hoverable
            cover={
                <div style={{
                    height: 160,
                    background: '#f0f2f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <PlayCircleOutlined style={{ fontSize: 48, color: '#1890ff' }} />
                </div>
            }
            actions={[
                <Button type="link" icon={<PlayCircleOutlined />}>
                    Watch
                </Button>
            ]}
        >
            <Card.Meta
                title={video.title}
                description={
                    <>
                        <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                            {video.description}
                        </Paragraph>
                        <Text type="secondary">{video.duration}</Text>
                    </>
                }
            />
        </Card>
    );

    return (
        <div style={{ padding: 24 }}>
            <Card>
                <Title level={2} style={{ marginBottom: 8 }}>
                    <BookOutlined /> Learning Materials
                </Title>
                <Paragraph type="secondary">
                    Comprehensive resources for developers and traders
                </Paragraph>

                <Input
                    placeholder="Search materials..."
                    prefix={<SearchOutlined />}
                    style={{ margin: '16px 0' }}
                    allowClear
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Card>

            <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                style={{ marginTop: 24 }}
            >
                <TabPane
                    tab={
                        <span>
                            <CodeOutlined /> Developer Resources
                        </span>
                    }
                    key="1"
                >
                    <Card title="Programming & Development">
                        {filterResources(developerResources).length > 0 ? (
                            <List
                                dataSource={filterResources(developerResources)}
                                renderItem={renderResourceCard}
                            />
                        ) : (
                            <Empty description="No developer resources found" />
                        )}
                    </Card>
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <RobotOutlined /> MQL5 Scripts
                        </span>
                    }
                    key="2"
                >
                    <Card title="Trading Robots & Indicators">
                        <Row gutter={16} style={{ marginBottom: 16 }}>
                            <Col span={12}>
                                <Card size="small">
                                    <Space>
                                        <Avatar icon={<RobotOutlined />} />
                                        <Text strong>How to Install MQL5 Scripts</Text>
                                    </Space>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card size="small">
                                    <Space>
                                        <Avatar icon={<ToolOutlined />} />
                                        <Text strong>Script Testing Guide</Text>
                                    </Space>
                                </Card>
                            </Col>
                        </Row>

                        {filterResources(mql5Scripts).length > 0 ? (
                            <List
                                dataSource={filterResources(mql5Scripts)}
                                renderItem={renderResourceCard}
                            />
                        ) : (
                            <Empty description="No MQL5 scripts found" />
                        )}
                    </Card>
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <FilePdfOutlined /> Trading Resources
                        </span>
                    }
                    key="3"
                >
                    <Card title="Educational Materials">
                        {filterResources(tradingResources).length > 0 ? (
                            <List
                                dataSource={filterResources(tradingResources)}
                                renderItem={renderResourceCard}
                            />
                        ) : (
                            <Empty description="No trading resources found" />
                        )}
                    </Card>
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <VideoCameraOutlined /> Video Tutorials
                        </span>
                    }
                    key="4"
                >
                    <Card title="Video Learning Library">
                        <Row gutter={16}>
                            {videoTutorials.map(video => (
                                <Col span={8} key={video.id} style={{ marginBottom: 16 }}>
                                    {renderVideoCard(video)}
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </TabPane>
            </Tabs>

            <Card title="Recommended Learning Path" style={{ marginTop: 24 }}>
                <Collapse accordion>
                    {learningPaths.map((path, index) => (
                        <Panel header={path.title} key={index + 1}>
                            <List
                                dataSource={path.items}
                                renderItem={(item, idx) => (
                                    <List.Item>
                                        <Text>{idx + 1}. {item}</Text>
                                    </List.Item>
                                )}
                            />
                        </Panel>
                    ))}
                </Collapse>
            </Card>
        </div>
    );
};

export default Materials;