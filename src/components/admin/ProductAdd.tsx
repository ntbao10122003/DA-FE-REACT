import { Button, Form, Input, message } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../api/product";
import { pause } from "../../utils/pause";

type FieldType = {
    name?: string;
    brand?: string;
    desc?: string;
    price?: string;
};

const ProductAdd = () => {
    const [addProduct, { isLoading: isAddLoading }] = useAddProductMutation();
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        addProduct(values)
            .unwrap()
            .then(async () => {
                form.resetFields();
                messageApi.open({
                    type: "success",
                    content: "Thêm sản phẩm thành công.",
                });
                await pause(1000);
                navigate("/admin/product");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl ">Thêm sản phẩm</h2>
            </header>
            {contextHolder}

            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm" },
                        { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Thương hiệu"
                    name="brand"
                    rules={[
                        { required: true, message: "Vui lòng nhập thương hiệu" }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Mô tả sản phẩm"
                    name="desc"
                    rules={[
                        { required: true, message: "Vui lòng nhập mô tả" }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType> 
                    label="Giá sản phẩm" 
                    name="price"
                    rules={[
                        { required: true, message: "Vui lòng nhập giá sản phẩm" }
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary"  htmlType="submit" className="bg-blue-600 hover:bg-blue-600">
                        {isAddLoading ? (
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        ) : (
                            "Thêm"
                        )}
                    </Button>
                    <Button type="primary" className="ml-2" danger onClick={ () => navigate("/admin/product")} >Quay lại</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default ProductAdd;