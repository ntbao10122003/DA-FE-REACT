import { Space, Table, Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const Categories = () => {

    const columns: ColumnsType = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
            name: 'Danh Mục 1',
        },
        {
            key: '2',
            name: 'Danh mục 2',
        },
    ];
    return (
        <div style={{ width: '82vw'}}>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Categories