import React from 'react';
import { Form, Icon, Input, Modal, Upload } from 'antd';

const FormItem = Form.Item;

class UserUploadForm extends React.Component {
    state = {
        fileList: [],
        previewImage: '',
        previewVisible: false,
    };

      handleCancel = () => this.setState({ previewVisible: false })

      handlePreview = file => {
          this.setState({
              previewImage: file.url || file.thumbUrl,
              previewVisible: true,
          });
      }

      handleChange = ({ fileList }) => (console.log(fileList))

      handleCreate = () => {
          const { form } = this.formRef.props;
          form.validateFields((error, { story }) => {
              if (error) {
                  return error;
              }
              form.resetFields();
            //   const userUpload = this.state.userUpload.append({ story })
            //   this.setState({ userUpload });
          });
      }

      render() {
          const { visible, onCancel, form } = this.props;
          const { getFieldDecorator } = form;

          const { previewVisible, previewImage, fileList } = this.state;
          const uploadButton = (
              <div>
                  <Icon type="plus" />
                  <div className="ant-upload-text">Upload</div>
              </div>
          );
          const props = {
              action: 'cloudinary://354589149811699:NVgHitgN7zojU31ptumO4U3l4iM@dwua2kqhp',
              listType: 'picture-card',
              multiple: false,
              name: 'image',
              onChange: this.handleChange,
              onPreview: this.handlePreview,
              onRemove: this.handleRemove,
          };

          return (
              <Modal
                visible={visible}
                title="Create a new user upload"
                okText="Create"
                onCancel={onCancel}
                onOk={this.handleCreate}
              >
                  <Form layout="vertical">
                      <FormItem label="Story">
                          {getFieldDecorator('story', {
                              rules: [{ message: 'Please input your descriptions' }],
                          })(
                              <Input />
                          )}
                      </FormItem>
                  </Form>
                  <div className="clearfix">
                      <Upload {...props}>
                          {fileList.length >= 3 ? null : uploadButton}
                      </Upload>
                      <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                          <img alt="example" style={{ width: '100%' }} src={previewImage} />
                      </Modal>
                  </div>
              </Modal>
          );
      }
}

const UserUploadModal = Form.create()(UserUploadForm);

export default UserUploadModal;

