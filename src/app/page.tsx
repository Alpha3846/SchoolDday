import FilteredDdayValues from "@/components/main/content/index/dday_grid/dday_grid.component";
import Sidebar from "@/components/main/sidebar/sidebar";
import RemainBox from "@/components/modules/remains/remain-box";
import styles from "./page.module.css";

export default function IndexPage() {
    return (
        <main>
            <RemainBox />
            <section className={styles.main}>
                <Sidebar button />
                <FilteredDdayValues />
            </section>
        </main>
    );
}
