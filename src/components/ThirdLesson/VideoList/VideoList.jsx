import css from './Video.module.css'

const VideoList = ({ videos, onSelect }) => {
  return (
    <ul className={css.items}>
      {videos.map(video => (
        <li key={video.id} className={css.item} onClick={() => onSelect(video.link)}>
          {video.link}
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
