import React, { useState } from 'react';
import Modal from 'react-modal';
import TextWithRuby from '../../Web3D/components/TextWithRuby';

Modal.setAppElement('#root');

const CustomModal = ({ triggerText, children, modalStyle, triggerRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* トリガーボタン */}
      <button onClick={openModal} className='modal-trigger' ref={triggerRef}>
        <TextWithRuby text={triggerText} anotherRuby={{ 問: 'と' }} />
      </button>

      {/* モーダル */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            ...modalStyle?.overlay,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '20px',
            borderRadius: '10px',
            ...modalStyle?.content,
          },
        }}
      >
        {/* モーダルのクリックイベントを止める */}
        <div className='modal-content' id='modal'>
          {children}
          <button onClick={closeModal} className='modal-close-button'>
            <TextWithRuby text={'閉じる'} />
          </button>
          <br />
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
