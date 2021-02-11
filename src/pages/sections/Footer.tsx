import { Box, Link, Icon } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import style from "./style.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <span className={style.span}>
          <p>© greenwoodrecords, record now</p>
          <a>Impressum</a>
          <a>AGB</a>
          <a>Datenschutzerklärung</a>
        </span>
      </div>
      <div>
        <span className={style.span}>
          <div>Gföhlerstraße 34</div>
          <div> 3552 Lengenfeld</div>
          <div>Österreich</div>
        </span>
      </div>
      <div>
        <span className={style.span}>
          <div> office@greenwoodrecords.at</div>
          <div> +43 660 3002487 </div>
          <div className={style.icons}>
            <Link
              prefetch={false}
              href="https://www.facebook.com/Greenwoodrecords-104374568346681"
            >
              <a target="_blank" className={style.facebookIcon}>
                <Icon as={AiFillFacebook} />
              </a>
            </Link>
            <Link
              href="https://www.instagram.com/greenwood_records/"
              prefetch={false}
            >
              <a target="_blank" className={style.instagramIcon}>
                <Icon as={AiOutlineInstagram} />
              </a>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCM3BVjkQJ52tvrp2U3FaXeQ/featured"
              prefetch={false}
            >
              <a target="_blank" className={style.youtubeIcon}>
                <Icon as={AiFillYoutube} />
              </a>
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
}
