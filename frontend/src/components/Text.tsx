import { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title?: string;
  className?: string;
  style?: CSSProperties;
  singleLine?: boolean;
  children?: ReactNode;
};

const Text: FC<Props> = ({ title, className, style, singleLine, children }) => {
  const singleLineClassName = singleLine ? 'text-single-line' : '';
  return (
    <Root
      style={style}
      className={`${singleLineClassName} ${className}`}
      title={title}
    >
      {children}
    </Root>
  );
};

const Root = styled.span`
  box-sizing: border-box;
  font-size: 14px;
  color: #FFFFFF;

  &.text-single-line {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
  }
`;

export default Text;