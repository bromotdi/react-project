import style from './Title.module.scss';

interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  const { text } = props;
  return <h1 className={style.title}>{text}</h1>;
};

export default Title;
