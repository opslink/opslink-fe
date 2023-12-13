import React from 'react';
import { Nav, Layout } from '@douyinfe/semi-ui';
import styles from './index.module.scss'

const { Sider} = Layout;
import {IconHome,IconHistogram,IconLive,IconSetting } from '@douyinfe/semi-icons'
function DSider() {
  return (
    <ul className="menu bg-base-200 w-56 [&_li>*]:rounded-none">
      <li className='focus active'><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
    </ul>
  );
}

export default DSider;
