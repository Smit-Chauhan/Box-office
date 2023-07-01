import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  return (
    <div>
    {shows.map(data => (
        <ShowCard 
        key={data.show.id}
        id={data.show.id}
        name={data.show.name}
        image={data.show.image ? data.show.image.medium : '/not-found.png'}
        summary={data.show.summary}
        onStarMeClick={onStarMeClick}
        isStarred={starredShows.includes(data.show.id)}/>
    ))}
    </div>
  );
};

export default ShowGrid;