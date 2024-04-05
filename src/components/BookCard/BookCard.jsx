import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { addId } from "@/lib/features/favorite/favoriteSlice";
import { popId } from "@/lib/features/favorite/favoriteSlice";
import { useRouter } from "next/navigation";

export default function BookCard(props) {
  const router = useRouter();
  const darkmode = useSelector((state) => state.darkmode.value);
  const connexion = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const favoriteArray = useSelector((state) => state.favorite.value);

  const [fav, setFav] = useState(false);

  useEffect(() => {
    const isFavorite = favoriteArray.includes(props.id);
    setFav(isFavorite);
  }, [favoriteArray, props.id]);

  return (
    <div
      className={`card card-side shadow-xl ${
        darkmode ? "bg-[#262626]" : "bg-[#E4E4E4]"
      } `}
    >
      <figure className="hidden sm:block sm:w-2/5">
        <img className="hidden sm:block" src={props.img} alt="Movie" />
      </figure>
      <div className="card-body sm:w-3/5">
        <h2
          className={`card-title font-[utendo-bold] text-xl ${
            darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
          }`}
        >
          {props.title}
        </h2>
        <p
          className={`font-[utendo-regular] text-lg ${
            darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
          }`}
        >
          {props.authors}
        </p>
        <p
          className={`hidden sm:flex font-[utendo-regular] text-lg ${
            darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
          }`}
        >
          Genres: {props.genres}
        </p>
        <p
          className={`hidden sm:flex font-[utendo-regular] text-lg ${
            darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
          }`}
        >
          Rating: {props.rating}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/book-list/${props.id}`}>
            <button
              className={`btn btn-primary bg-[#FF5400] border-none shadow-none hover:bg-[#FF7F40] font-[utendo-medium] text-lg tracking-widest ${
                darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
              }`}
            >
              More
            </button>
          </Link>
          <button
            onClick={() => {
              connexion.status
                ? fav
                  ? dispatch(popId(props.id))
                  : dispatch(addId(props.id))
                : router.push("/sign-in");
            }}
            className={`btn btn-primary bg-[#FF5400] border-none shadow-none hover:bg-[#FF7F40] text-lg ${
              darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
            }`}
          >
            {fav ? (
              <FontAwesomeIcon icon={faSolidHeart} className="text-red-600" />
            ) : (
              <FontAwesomeIcon icon={faEmptyHeart} className="" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
