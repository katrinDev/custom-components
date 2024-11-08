import type { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import { useCallback, useState } from 'react';
import styles from '../button/Button.module.scss';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledModal(args: Omit<ModalProps, 'isOpen' | 'onClose'>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = useCallback(() => setIsOpen(false), []);

  const showModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <button className={styles['custom-button']} onClick={showModal}>
        Show Modal
      </button>
      <Modal isOpen={isOpen} onClose={onClose} {...args} />
    </>
  );
}

export const SimpleModal: Story = {
  render: (args) => <ControlledModal {...args} />,
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt dignissimos, distinctio eligendi eveniet fugit ipsa labore magni molestias non officiis quasi qui quidem, repellat saepe similique sit. Quasi, qui!',
  },
};
