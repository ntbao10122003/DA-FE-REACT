import { Space, Table, Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const ListProducts = () => {

    const columns: ColumnsType = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button>
                        UPDATE
                    </Button>
                    <Button>Delete</Button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Product 1',
            price: 10,
            image: 'Address 1',
        },
        {
            key: '2',
            name: 'Product 2',
            price: 20,
            image: 'Address 2',
        },
    ];
    return (
        <div>
            <h1>Products Management</h1>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default ListProducts