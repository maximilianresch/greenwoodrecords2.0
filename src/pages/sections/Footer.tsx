import { Link, Icon } from "@chakra-ui/react";
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
          <p>
            {" "}
            <Link href="/">© greenwoodrecords, record now </Link>
          </p>
          <div>
            {" "}
            <Link href="/impressum">
              Impressum
            </Link>
          </div>
          <div>
            {" "}
            <Link target="_blank" href="https://www.wko.at/branchen/gewerbe-handwerk/film-musikwirtschaft/AGB-Tonstudiobetriebe.pdf">
              AGB
            </Link>
          </div>
          <div>
            {" "}
            <Link href="/datenschutz">
              Datenschutzerklärung
            </Link>
          </div>
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
              target="_blank"
              href="https://www.facebook.com/Greenwoodrecords-104374568346681"
            >
              <Icon w={5} h={5} color="#1877f2" as={AiFillFacebook} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/greenwood_records/"
            >
              <Icon w={5} h={5} color="#e4405f" as={AiOutlineInstagram} />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UCM3BVjkQJ52tvrp2U3FaXeQ/featured"
            >
              <Icon w={5} h={5} color="#e4405f" as={AiFillYoutube} />
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
}
