import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Sidebar() {
    return <div className={cx('wrapper')}>SideBar</div>;
}
