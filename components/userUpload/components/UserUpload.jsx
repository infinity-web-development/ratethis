import React from 'react';
import { Icon } from 'antd';
import UserUploadModal from './UserUploadModal';

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

    handleCreate = () => {
        const { form } = this.formRef.props;
        const { uploads } = this.state;
        form.validateFields((error, { story, image }) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const upload = uploads.append({ image, story });
            this.setState({ upload });
        });
    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    render() {
        const { visible } = this.state;
        return (
            <div>
                <Icon onClick={this.showModal} type="plus" />
                <UserUploadModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
