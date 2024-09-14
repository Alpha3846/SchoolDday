import AmountSection from "@/components/main/sidebar/amount_section";
import ButtonSection from "@/components/main/sidebar/button_section";
import OptionsSection from "@/components/main/sidebar/options";
import TypeSection from "@/components/main/sidebar/type_section";
import styles from "./sidebar.module.css";

export default function Sidebar(props: { button: boolean }) {
    const { button } = props;

    return (
        <ul className={styles.sidebar}>
            {button ? (
                <>
                    <ButtonSection />
                    <AmountSection />
                </>
            ) : null}
            <OptionsSection />
            <TypeSection />
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-1710052864536454"
                data-ad-slot="7665414865"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </ul>
    );
}
