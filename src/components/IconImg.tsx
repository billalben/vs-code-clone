interface IProps {
  src: string;
}

const IconImg = ({ src }: IProps) => {
  return (
    <div className="w-5 h-5">
      <img src={src} alt="img" />
    </div>
  );
};

export default IconImg;
