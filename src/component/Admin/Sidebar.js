import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTh, FaGem, FaHeart } from 'react-icons/fa';
import { GiDolphin } from 'react-icons/gi';
import sidebarBg from '../../assets/bg2.jpg';
import 'react-pro-sidebar/dist/css/styles.css';
const SidebarAdmin = ({
    image,
    collapsed,
    rtl,
    toggled,
    handleToggleSidebar,
}) => {
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                rtl={rtl}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <GiDolphin size={'2em'} color={'f72650'} />
                        <span>Mipha Admin</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FaTh />}>DashBoard</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<FaGem />} title="Features">
                            <MenuItem>Quản lý User</MenuItem>
                            <MenuItem>Quản lý bài Quiz</MenuItem>
                            <MenuItem>Quản lý Questions</MenuItem>
                        </SubMenu>
                        {/* <SubMenu icon={<FaList />}>
                            <MenuItem>1</MenuItem>
                            <MenuItem>2</MenuItem>
                            <SubMenu>
                                <MenuItem>3.1</MenuItem>
                                <MenuItem>3.2</MenuItem>
                                <SubMenu>
                                    <MenuItem>3.3.1</MenuItem>
                                    <MenuItem>3.3.2</MenuItem>
                                    <MenuItem>3.3.3</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu> */}
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/khanhvu0711/react-redux"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <GiDolphin color={'f72650'} />

                            <span
                                style={{
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                }}
                            >
                                {' '}
                                Mipha github
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
            ;
        </>
    );
};

export default SidebarAdmin;
