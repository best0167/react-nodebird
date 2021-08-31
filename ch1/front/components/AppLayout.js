import React from 'react';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from "./LoginForm";
import UserProfile from './UserProfile';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user);

    return (
        <>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home"><Link href="/"><a>취미일기</a></Link></Menu.Item>
                    <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                    <Menu.Item key="mail">
                        <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                    </Menu.Item>
                    <Menu.Item key="board"><Link href="/board"><a>게시판</a></Link></Menu.Item>
                </Menu>
                <Row gutter={10}>
                    <Col xs={24} md={6}>
                        {isLoggedIn
                            ? <UserProfile />
                            : <LoginForm />
                        }
                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        <Link href="https://blog.naver.com/best0167" ><a target="_blank">프레임 블로그</a></Link>
                    </Col>
                </Row>

            </div>
        </>
    );
};

AppLayout.proptypes = {
    Children: PropTypes.node,
};

export default AppLayout;