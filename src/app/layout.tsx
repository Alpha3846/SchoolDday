import "./globals.css";
import Footer from "@/components/main/footer/footer.component";
import Header from "@/components/main/header/header.component";
import MobileNavigationBarComponent from "@/components/main/mobile_navbar/mobile_navbar.component";
import AnalyticsProvider from "@/components/main/provider/analytics_provider";
import Providers from "@/store/provider";
import { Metadata } from "next";
import Script from "next/script";
import React from "react";
import styles from "./layout.module.css";

export const metadata: Metadata = {
    title: "남해해성고 디데이",
    description: "남해해성고등학교 학생들을 위한 디데이 사이트입니다.",
    applicationName: "남해해성고등학교 라이브 디데이 카운터",
    authors: [
        { name: "AlphaKR93", url: "https://alpha93.kr/" },
        { name: "Alpha3846", url: "https://github.com/Alpha3846/" }
    ],
    creator: "AlphaKR93",
    publisher: "Alpha3846",
    verification: { other: { "naver-site-verification": "c070ebcbedf1956dadcd0fa3f6c4207d16d21856" } },
    other: { "google-adsense-account": "ca-pub-1710052864536454" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1710052864536454"
                crossOrigin="anonymous"
            />
            <body>
                <Providers>
                    <div className={styles.body}>
                        <Header />
                        {children}
                        <MobileNavigationBarComponent />
                        <Footer />
                    </div>
                    <div className={styles.unsupportedSize}>
                        <p>
                            본 사이트에서
                            <br />
                            지원하지 않는
                            <br />
                            화면 크기입니다.
                        </p>
                    </div>
                </Providers>
                <AnalyticsProvider />
            </body>
            <Script id="adsbygoogle-push">(adsbygoogle = window.adsbygoogle || []).push({})</Script>
        </html>
    );
}
