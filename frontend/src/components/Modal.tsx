import { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  show: boolean;
  onClose: () => void;
  style?: CSSProperties;
  draggable?: boolean;
  fixedTopPosition?: boolean;
  children: ReactNode;
};

const Modal: FC<Props> = ({
  show,
  onClose,
  style,
  draggable,
  fixedTopPosition,
  children,
}) => {
  const handleClose = (ev?: React.MouseEvent) => {
    ev?.preventDefault();
    ev?.stopPropagation();
    onClose();
  };

  if (!show) return null;

  const draggableClassName = draggable ? 'modal-draggable' : '';
  return (
    <Root onClick={(ev) => handleClose(ev)} className={draggableClassName}>
      <Container
        style={style}
        onClick={(ev) => ev.stopPropagation()}
        className="modal-container"
      >
        {children}
      </Container>
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000088;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &.modal.draggable {
    -webkit-app-region: drag;
  }

  &.modal-draggable > * {
    -webkit-app-region: none;
  }
`;

const Container = styled.div`
  background-color: #000000;
  box-shadow: 0 0 8px 4px #00000030;
  padding: 16px;
  width: auto;
  height: auto;
  max-height: 100%;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  flex-direction: column;
  box-sizing: border-box;
`;

export default Modal;
