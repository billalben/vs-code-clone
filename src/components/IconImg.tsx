interface IProps {
  src: string;
  className?: string;
}

const IconImg = ({ src, className = "w-5 h-5" }: IProps) => {
  return (
    <div className={className}>
      <img src={src} alt="img" />
    </div>
  );
};

export default IconImg;
