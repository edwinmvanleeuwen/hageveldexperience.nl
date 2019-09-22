import React, { FunctionComponent } from 'react';
import { Link, navigate } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

interface MenuItem {
    name: string;
    path: string;
    match: RegExp;
}

interface Props {
    items: MenuItem[];
}

/*
{items.map((item: MenuItem, n: number) => (
    <Link
        key={n}
        onClick={() => navigate(item.path)}
        className={item.match.test(location.pathname) ? 'selected' : ''}
    >
        {item.name}
    </Link>
))}
*/

const Navigation: FunctionComponent<Props> = ({ items }: Props) => (
    <Location>
        {({ location }) => (
            <Menu
                onClick={() => false}
                selectedKeys={[]}
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="home">
                    <Link to="/">
                        <Icon type="home" />
                        Hageveld Experience
                    </Link>
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="user" />
                            Gebruiker
                        </span>
                    }
                    style={{
                        float: 'right'
                    }}
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        )}
    </Location>
);

export default Navigation;