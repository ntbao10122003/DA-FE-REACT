import { Button, Form, Input, Skeleton, message } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useAddProductMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../api/product";
import { pause } from "../../utils/pause";
import { useEffect } from "react";

type FieldType = {
  name?: string;
  brand?: string;
  desc?: string;
  price?: string;
};

const ProductEdit = () => {
  const { idProduct } = useParams<{ idProduct: string }>();
  const { data: productData, isLoading } = useGetProductByIdQuery(
    idProduct || ""
  );
  const [updateProduct] = useUpdateProductMutation();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue({
        name: productData?.name,
        price: productData?.price,
        brand: productData?.brand,
        desc: productData?.desc,
    })
  }, [productData]);

  const onFinish = (values: any) => {
    updateProduct({...values, id:idProduct})
      .unwrap()
      .then(async () => {
        form.resetFields();
        messageApi.open({
          type: "success",
          content: "Cập nhật sản phẩm thành công.",
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
        <h2 className="font-bold text-2xl ">
          Cập nhật sản phẩm: {productData?.name}
        </h2>
      </header>
      {contextHolder}
      {isLoading ? (
        <Skeleton />
      ) : (
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
            rules={[{ required: true, message: "Vui lòng nhập thương hiệu" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Mô tả sản phẩm"
            name="desc"
            rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Giá sản phẩm"
            name="price"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-600 hover:bg-blue-600"
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                "Cập nhật"
              )}
            </Button>
            <Button type="primary" className="ml-2" danger onClick={ () => navigate("/admin/product")} >Quay lại</Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default ProductEdit;
