import React from 'react';
import { Form, Icon, Input, Modal, Select, Upload } from 'antd';

import { PLUS, UPLOAD } from '../constants';

const { Item } = Form;
const { Option } = Select;

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

    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;

        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type={PLUS} />
                <div>{UPLOAD}</div>
            </div>
        );
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
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
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <Item label="Story">
                        {getFieldDecorator('story', {
                            rules: [{ message: 'Please input your descriptions' }],
                        })(
                            <Input />
                        )}
                    </Item>
                    <Item>
                        <Select placeholder="Comparison">
                            <Option value="single">Single Outfit</Option>
                            <Option value="double">Compare Outfit</Option>
                        </Select>
                    </Item>
                </Form>
                <div>
                    <Upload {...props}>
                        {fileList.length >= 0 && uploadButton}
                    </Upload>
                    <Modal
                        visible={previewVisible}
                        footer={null}
                        onCancel={this.handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
            </Modal>
        );
    }
}

const UserUploadModal = Form.create()(UserUploadForm);

export default UserUploadModal;