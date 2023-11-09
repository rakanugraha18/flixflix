import { Link } from "react-router-dom";
export default function CardTopRate(props) {
  const { img, title, date, rating, id } = props;
  return (
    <>
      <Link to={`/detailTopRate/${id}`}>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="h-16 items-center text-center">
            <h2 className="text-3xl sm:text-3xl md:text-xl lg:text-xl xl:text-xl font-semibold mb-2">
              {title}
            </h2>
          </div>
          <img
            className="w-full h-full object-cover mb-2 rounded-lg"
            src={img}
          />
          <div className="Movie-date">Release Date: {date}</div>
          <div className="Movie-rate">Rating : {rating}</div>
        </div>
      </Link>
    </>
  );
}
