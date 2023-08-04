import { Button, Popconfirm, Skeleton, Table, message } from "antd";
import { Link } from "react-router-dom";
import { useGetProductsQuery, useRemoveProductMutation } from "../../api/product";
type Props = {};

const ProductList = (props: Props) => {
    const { data, error, isLoading: isProductLoading } = useGetProductsQuery();
    const [removeProduct] = useRemoveProductMutation();
    const [messageApi, contextHolder] = message.useMessage();

    const dataSource = data?.map((item: any) => ({
        key: item.id,
        name: item.name,
        brand: item.brand,
        desc: item.desc,
        price: item.price,
    }));

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Thương hiệu",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Mô tả sản phẩm",
            dataIndex: "desc",
            key: "desc",
        },
        {
            title: "Giá sản phẩm",
            dataIndex: "price",
            key: "price",
        },
        {
            render: (record: any) => (
                <div>
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc chắn muốn xóa không??"
                        onConfirm={() => {
                            removeProduct(record.key) // Sử dụng record.key thay vì ({ key: id })
                                .unwrap()
                                .then(() => {
                                    messageApi.open({
                                        type: "success",
                                        content: "Xóa sản phẩm thành công",
                                    });
                                });
                        }}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button danger>Xóa</Button>
                    </Popconfirm>
                    <Button type="primary" danger className="ml-2">
                        <Link to={`/admin/product/${record.key}/edit`}>Sửa</Link>
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <header className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>
            {contextHolder}
            {isProductLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default ProductList;