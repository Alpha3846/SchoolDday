import * as pack from "@/../package.json";
import dayjs from "dayjs";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div>
                    <span>
                        <h1>남해해성고등학교 디데이 카운터</h1>
                        <p>버전 {pack.version}</p>
                    </span>
                    <p>Copyright (C) 2022-{dayjs().year()} AlphaKR93, Licenced under MIT License.</p>
                </div>
                <a href="https://status.alpha93.kr/" className="button default">
                    사이트 상태
                </a>
            </div>
        </footer>
    );
}
