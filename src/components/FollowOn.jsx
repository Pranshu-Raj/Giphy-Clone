import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/**
 * Renders a component displaying social media follow links.
 * @returns {JSX.Element} A div containing "Follow on" text and social media icons with links.
 */
export default function FollowOn() {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.youtube.com/roadsidecoder">
          <FaYoutube size={20} />
        </a>
        <a href="https://www.youtube.com/roadsidecoder">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.youtube.com/roadsidecoder">
          <FaXTwitter size ={20} />
        </a>
      </div>
    </div>
  );
}
