import ThemeButton from "@/components/assets/buttons/themer/theme_button.component";
import AnimatedSimpleIcon from "@/components/assets/icons/simple-icons/provider";
import ButtonSection from "@/components/main/sidebar/button_section";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link className={styles.logo} href="/">
                    남해해성고 D-day
                </Link>
                <div className={styles.buttons}>
                    <div className={styles.iconsOnly}>
                        <ButtonSection />
                    </div>
                    <div className={styles.icons}>
                        <a href="https://www.instagram.com/alphakr93/">
                            <AnimatedSimpleIcon
                                id="instagram"
                                color={{
                                    light: { primary: "6B7280", secondary: "000000" },
                                    dark: { primary: "6B7280", secondary: "ffffff" }
                                }}
                            />
                        </a>
                        <ThemeButton />
                    </div>
                    <ul className={styles.button}>
                        <li>
                            <a className="button default" href="https://github.com/Alpha8396/SchoolDday">
                                소스코드
                            </a>
                        </li>
                        <li>
                            <a
                                className="button highlight bg-blue-600"
                                href="https://qr.kakaopay.com/FPQhdrTiU"
                                style={
                                    {
                                        "--highlighted-button-color": "#1C64F2",
                                        "--highlighted-text-color": "#ffffff"
                                    } as React.CSSProperties
                                }
                            >
                                후원하기
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
