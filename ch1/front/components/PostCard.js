import React from 'react';
import { Card, Icon, Button, Avatar } from 'antd';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
    return (
        <Card
            key={+post.createAt}
            cover={post.img && <img alt="example" src={post.img} />}
            actions={[
                <Icon type="retweet" key="retweet" />,
                <Icon type="star" key="star" />,
                <Icon type="message" key="message" />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
            />
        </Card>
    );
};

PostCard.prototypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createAt: PropTypes.object,
    }),
};

export default PostCard;