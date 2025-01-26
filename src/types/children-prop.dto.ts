export interface ChildrenProps  {
    children: React.ReactNode;
};

export interface ButtonProps extends ChildrenProps {
    bgColor?: string | '#fff'
    width?: string | '271px'
}