import { Link } from "react-router-dom";

/**
 * Renders a GIF component with an optional hover effect.
 * @param {Object} gif - The GIF object containing information like images, title, user details, etc.
 * @param {boolean} [hover=true] - Whether to show the hover effect with user details. Defaults to true.
 * @returns {JSX.Element} A Link component wrapping the GIF image and optional hover overlay.
 */
export function Gif({ gif, hover = true }) {
  return (
    <Link to={`/${gif.type}s/${gif.slug}`}>
      <div className="w-full mb-2 relative cursor-pointer group aspect-video">
        <img
          src={gif?.images?.fixed_width.webp}
          alt={gif?.title}
          className="w-full object-cover rounded transition-all duration-300"
        />
        {hover && (
          <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className="h-8"
                      />
                      <span>{gif?.user?.display_name }</span>
          </div>
        )}
      </div>
    </Link>
  );
}
