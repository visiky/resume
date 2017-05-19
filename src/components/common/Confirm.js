import {Modal, Button} from 'antd';
const confirm = Modal.confirm;

function showConfirm(confirmTitle, confirmContent) {
  return new Promise((resolve, reject) => {
    confirm({
      title: confirmTitle,
      content: confirmContent,
      okText: "确定",
      cancelText: "取消",
      onOk() {
          resolve("ok");
        // return new Promise((resolve, reject) => {
        //   setTimeout(Math.random() > 0.5
        //     ? resolve
        //     : reject, 1000);
        // }).catch(() => reject('Oops errors!'));
      },
      onCancel() {
         reject('cancle');
      }
    });
  });

}

export default showConfirm;