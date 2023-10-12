interface VoteButtonProps {
  index: number;
  label: string;
  onVote: (index: number) => void;
}

const VoteButton: React.FC<VoteButtonProps> = ({ index, label, onVote }) => {
  return (
    <button className="vote_button" onClick={() => onVote(index)}>
      {label}
    </button>
  );
};

export default VoteButton;
