import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Avatar, Dropdown, Space, Typography } from 'antd';
import {
  DashboardOutlined,
  FormOutlined,
  FileTextOutlined,
  TableOutlined,
  BarChartOutlined,
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './App.css';
import type { MenuProps } from 'antd';

//page components
import Dashboard from './pages/Dashboard';
import TradingForm from './pages/TradingForm';
import TradingInstructions from './pages/TradingInstructions';
import TradeList from './pages/TradeList';
import SmartAnalyzer from './pages/SmartAnalyzer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordRecovery from './pages/auth/PasswordRecovery';
import HelpSupport from './pages/HelpSupport';
import FAQs from './pages/FAQs';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const userMenu: MenuProps = {
    items: [
      {
        key: 'profile',
        icon: <UserOutlined />,
        label: 'Profile',
      },
      {
        key: 'settings',
        icon: <UserOutlined />,
        label: 'Settings',
      },
      {
        type: 'divider',
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Logout',
        onClick: handleLogout,
      },
    ],
  };

  const menuItems: MenuProps['items'] = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/trading-form',
      icon: <FormOutlined />,
      label: 'Trading Form',
    },
    {
      key: '/instructions',
      icon: <FileTextOutlined />,
      label: 'Trading Instructions',
    },
    {
      key: '/trade-list',
      icon: <TableOutlined />,
      label: 'Trade List',
    },
    {
      key: '/smart-analyzer',
      icon: <BarChartOutlined />,
      label: 'Smart Analyzer',
    },
    {
      key: 'support-group',
      type: 'group',
      label: 'SUPPORT',
      children: [
        {
          key: '/help',
          icon: <QuestionCircleOutlined />,
          label: 'Help & Support',
        },
        {
          key: '/faqs',
          icon: <QuestionCircleOutlined />,
          label: 'FAQs',
        },
      ],
    },
  ];

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<PasswordRecovery />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="light"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: '#0f172b',
          borderRight: '1px solid #1d293d'
        }}
      >
        <div className="logo">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title level={collapsed ? 4 : 3} style={{ color: '#90a1b9', margin: '16px 0' }}>
              {collapsed ? 'UFX' : 'Ubuntu FX'}
            </Title>
          </motion.div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{
            background: 'transparent',
            border: 'none'
          }}
        />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header className="site-layout-background" style={{
          padding: 0,
          background: '#1d293d',
          borderBottom: '1px solid #314158'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                type="primary"
                icon={<FormOutlined />}
                size="large"
                style={{
                  background: '#45556c',
                  borderColor: '#45556c',
                  color: '#f1f5f9'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#62748e'}
                onMouseLeave={e => e.currentTarget.style.background = '#45556c'}
                onClick={() => navigate('/trading-form')}
              >
                Add Trade
              </Button>
            </motion.div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Dropdown menu={userMenu} placement="bottomRight">
                  <Space style={{ cursor: 'pointer' }}>
                    <Avatar size="large" icon={<UserOutlined />} style={{ background: '#314158' }} />
                    <Text strong style={{ color: '#f1f5f9' }}>Trader</Text>
                  </Space>
                </Dropdown>
              </motion.div>
            </div>
          </div>
        </Header>

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              borderRadius: 8,
              background: '#f1f5f9'
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/trading-form" element={<TradingForm />} />
              <Route path="/instructions" element={<TradingInstructions />} />
              <Route path="/trade-list" element={<TradeList />} />
              <Route path="/smart-analyzer" element={<SmartAnalyzer />} />
              <Route path="/help" element={<HelpSupport />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </motion.div>
        </Content>

        <Layout.Footer style={{
          textAlign: 'center',
          background: '#0f172b',
          color: '#90a1b9',
          borderTop: '1px solid #1d293d'
        }}>
          Ubuntu FX Trading Journal ©{new Date().getFullYear()} - Forex Trading Dashboard
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;