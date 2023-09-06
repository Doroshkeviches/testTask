import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styles from './Loading.module.scss'
const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />
const Loading = () => {
    return (
        <div className={styles['spin']}>
            <Spin indicator={antIcon} />
        </div>
    );
};

export default Loading;