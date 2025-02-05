import { Link } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";
import PropTypes from "prop-types";
// import { MdDeleteForever } from 'react-icons/md'
const BlogCard = ({ blog }) => {
 
  const { id, cover_image, title, description, published_at } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group  transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  //   deletable: PropTypes.bool,
  //   handleDelete: PropTypes.func,
};

export default BlogCard;
