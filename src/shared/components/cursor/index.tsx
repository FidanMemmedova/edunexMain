import { PropsWithChildren } from "react";
import { Flex } from "antd";

import "./style.scss";

interface IProps {
  onClick?: () => void;
}

export const IconCursor: React.FC<PropsWithChildren<IProps>> = ({
  children,
  onClick,
}) => {
  return (
    <Flex onClick={onClick} className="cursor-icon">
      {children}
    </Flex>
  );
};
