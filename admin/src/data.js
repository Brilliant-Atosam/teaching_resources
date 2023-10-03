import { BsDownload } from "react-icons/bs";
import { BiPlayCircle, BiSolidPlaylist } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { IoEyeOutline, IoStatsChart } from "react-icons/io5";
import {
  MdDelete,
  MdDeleteOutline,
  MdEditDocument,
  MdMovieEdit,
} from "react-icons/md";
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
export const noterows = [
  {
    id: 1,
    title: "Materials",
    likes: 37,
    downloads: 14,
    comments: 22,
    views: 129,
    reach: 129,
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

    headerName: (
      <>
        Playlist <BiSolidPlaylist />
      </>
    ),
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
        <IoEyeOutline className="table-action-btn" />
        <MdMovieEdit className="table-action-btn" />
        <MdDelete className="table-action-btn" />
      </div>
    ),
  },
];
export const notecolumns = [
  { field: "id", headerName: "SN", width: 60 },
  { field: "title", headerName: "Title", width: 250 },
  {
    field: "reach",
    headerName: <IoStatsChart />,
    width: 60,
  },
  {
    field: "downloads",
    headerName: <BsDownload />,
    width: 60,
  },

  {
    field: "likes",
    headerName: <SlLike />,
    width: 60,
  },
  {
    field: "comments",
    headerName: <TfiCommentAlt />,
    width: 60,
  },
  {
    field: "activities",
    headerName: "Action",
    width: 120,
    renderCell: (params) => (
      <div className="table-action">
        <IoEyeOutline className="table-action-btn" />
        <MdEditDocument className="table-action-btn" />
        <MdDeleteOutline className="table-action-btn" />
      </div>
    ),
  },
];
export const streams = [
  { title: "S.H.S", value: "s.h.s" },
  { title: "J.H.S", value: "j.h.s" },
];
export const years = [
  { title: "Form 1", value: "form 1" },
  { title: "Form 2", value: "form 2" },
  { title: "Form 3", value: "form 3" },
];
