import * as pack from "@/../package.json";
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
                    <p>Copyright (C) 2024 Alpha8396, Licenced under MIT License.</p>
                    <p>Original by AlphaKR93</p>
                </div>
                <div className="flex gap-2">
                    <a
                        href="https://github.com/Alchives/SchoolDday/"
                        className="button default flex w-24 justify-center"
                    >
                        오리지널
                    </a>
                    <a href="https://qr.kakaopay.com/FPQhdrTiU" className="button default flex w-24 justify-center">
                        후원하기
                    </a>
                </div>
            </div>
        </footer>
    );
}
