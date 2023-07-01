import { Link } from "react-router-dom";

const ShowCard = ({ name, image, id, summary }) => {

    const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
        const summaryStripped = summary
          ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
          : 'No description';

    return (
        <div>
          <div>
            <img src="/not-found.png" />
          </div>

            <h1>{name}</h1>

            <p>summary</p>

            <div>
                <Link to={`/show/${id}`}>Read More</Link>
                <button type="button">Star me</button>
            </div>
        </div>
    )};
};

export default ShowCard;