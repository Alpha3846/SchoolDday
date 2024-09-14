import CounterComponent from "@/components/modules/dday_box/components/content/counter/counter.component";
import DateSection from "@/components/modules/dday_box/components/content/date/date.component";
import RemainDateComponent from "@/components/modules/dday_box/components/tags/date/remain/remains.component";
import SemesterComponent from "@/components/modules/dday_box/components/tags/date/semester/semester.component";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import TypeSpan, { DdayType } from "./components/tags/type/type.component";
import styles from "./dday_box.module.css";

export default function DdayBox(props: {
    name: string;
    type: DdayType;
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
    grades: number[] | undefined;
}) {
    const { name, type, date } = props;

    return (
        <div className={styles.ddayBox}>
            <div>
                <span className={styles.title}>{name}</span>
                <div className={styles.contentBox}>
                    <section className={styles.tags}>
                        <span className={styles.dateInformations}>
                            <SemesterComponent date={date} />
                            <RemainDateComponent start={date.start.valueOf()} end={date.end.valueOf()} />
                        </span>
                        <TypeSpan type={type} />
                    </section>
                    <CounterComponent start={date.start.valueOf()} end={date.end.valueOf()} />
                    <DateSection start={date.start} end={date.end} />
                </div>
            </div>
        </div>
    );
}
