import { Space, Table, Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const ListUser = () => {

    const columns: ColumnsType = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button>Chi tiết</Button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'User 1',
            email: 'user1@gmail.com',
            phone: '012345678',
            address: 'Address 1',
        },
        {
            key: '2',
            name: 'User 2',
            email: 'user2@gmail.com',
            phone: '012345679',
            address: 'Address 2',
        },
        {
            key: '3',
            name: 'User 3',
            email: '3@gmail.com',
            phone: '012345670',
            address: 'Address 3',
        },
    ];
    return (
        <div style={{ width: '82vw'}}>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default ListUser