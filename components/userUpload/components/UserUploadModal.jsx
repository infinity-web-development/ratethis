import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox, Form, Icon, Input, Modal, Upload } from 'antd';

import { COMPARE_OUTFIT, PICTURE_CARD, PLACEHOLDER, PLUS, UPLOAD } from '../constants';

const { Item } = Form;

class UserUploadForm extends React.Component {
    state = {
        fileList: [],
        isChecked: false,
        previewImage: '',
        previewVisible: false,
    };

    toggleCheck = () => {
        const { isChecked } = this.state;
        this.setState({
            isChecked: !isChecked,
        });
    }

    handleCancel = () => this.setState({ previewVisible: false })

    setPreview = value => this.setState({ previewVisible: value });

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        const { previewVisible, previewImage, fileList, isChecked } = this.state;
        console.log(fileList);
        const uploadButton = (
            <div>
                <Icon type={PLUS} />
                <div>{UPLOAD}</div>
            </div>
        );
        const props = {
            action: PLACEHOLDER,
            listType: PICTURE_CARD,
            multiple: false,
            name: 'image',
            onChange: this.handleChange,
            onPreview: () => this.setPreview(true),
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
                        <Checkbox onChange={this.toggleCheck}>{COMPARE_OUTFIT}</Checkbox>
                    </Item>
                </Form>
                <div>
                    {
                        isChecked ?
                            (
                                <Upload {...props}>
                                    {fileList.length >= 2 ? null : uploadButton}
                                </Upload>
                            ) :
                            (
                                <Upload {...props}>
                                    {fileList.length <= 0 && uploadButton}
                                </Upload>
                            )
                    }
                    <Modal
                        visible={previewVisible}
                        footer={null}
                        onCancel={() => this.setPreview(false)}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
            </Modal>
        );
    }
}

const UserUploadModal = Form.create()(UserUploadForm);

UserUploadForm.propTypes = {
    form: PropTypes.objectOf,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default UserUploadModal;
