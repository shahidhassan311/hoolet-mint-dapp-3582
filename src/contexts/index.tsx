import { ModalProvider } from "./modalContext";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default ContextProvider;
