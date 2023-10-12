import GameLensCard from '../card/GameLensCard';
import './MultiCardView.css';

interface Props{

}

const MultiCardView: React.FC<Props> = ({}) => {

  return(
    <div className={"multi_view"} >
        <GameLensCard index={0}/>
        <GameLensCard index={1}/>
    </div>
  )
};

export default MultiCardView;
