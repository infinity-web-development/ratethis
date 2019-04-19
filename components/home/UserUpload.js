import React from 'react';
import { Button } from 'antd';
import UserUploadModal from './UserUploadModal.js';

export default class UserUpload extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    // handleCreate = () => {
    //     const { form } = this.formRef.props;
    //     form.validateFields((error, { story }) => {
    //         if (error) {
    //             return error;
    //         }
    //         form.resetFields();
    //         const userUpload = this.state.userUpload.concat({ image, story, user })
    //         this.setState({ userUpload });
    //     });
    // }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New user upload</Button>
                <UserUploadModal
                  wrappedComponentRef={this.saveFormRef}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                //   onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

