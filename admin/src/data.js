import { BsDownload } from "react-icons/bs";
import { BiPlayCircle, BiSolidPlaylist } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { MdDelete, MdMovieEdit } from "react-icons/md";
import thumbnail from "./images/thumbnail.png";
export const rows = [
  {
    id: 1,
    title: "Materials",
    likes: 37,
    downloads: 14,
    comments: 22,
    views: 129,
    playlist: "7.1.1 Materials",
  },
];
export const columns = [
  { field: "id", headerName: "SN", width: 40 },
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 90,
    renderCell: (params) => (
      <img src={thumbnail} alt="thumbnail" className="table-thumbnail" />
    ),
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
  {
    field: "playlist",
    headerName: <BiSolidPlaylist />,
    width: 140,
  },
  {
    field: "views",
    headerName: <BiPlayCircle />,
    width: 40,
  },
  {
    field: "downloads",
    headerName: <BsDownload />,
    width: 40,
  },

  {
    field: "likes",
    headerName: <SlLike />,
    width: 40,
  },
  {
    field: "comments",
    headerName: <TfiCommentAlt />,
    width: 40,
  },

  {
    field: "activities",
    headerName: "Action",
    width: 120,
    renderCell: (params) => (
      <div className="table-action">
        <MdMovieEdit className="table-action-btn" />
        <MdDelete className="table-action-btn" />
      </div>
    ),
  },
];
