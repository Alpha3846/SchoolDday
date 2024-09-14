import { DdayType } from "@/components/modules/dday_box/components/tags/type/type.component";
import dayjs from "dayjs";
import { date } from "./builder";

type ddayListType = {
    name: string;
    type: DdayType;
    grades?: number[];
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
}[];

const ddays: ddayListType = [
    {
        name: "2학기 1차평가",
        type: DdayType.EXAMINATION,
        date: {
            start: date(false, 9, 26),
            end: date(false, 9, 30)
        }
    },
    {
        name: "10월 전국연합학력평가",
        type: DdayType.EXAMINATION,
        date: {
            start: date(false, 10, 15),
            end: date(false, 10, 15)
        }
    },
    {
        name: "대학수학능력시험",
        type: DdayType.EXAMINATION,
        date: {
            start: date(false, 11, 14),
            end: date(false, 11, 14)
        }
    },
    {
        name: "2학기 2차평가",
        type: DdayType.EXAMINATION,
        date: {
            start: date(false, 12, 2),
            end: date(false, 12, 4)
        }
    },
    {
        name: "동백제",
        type: DdayType.EVENT,
        date: {
            start: date(false, 12, 18),
            end: date(false, 12, 18)
        }
    },
    {
        name: "졸업식",
        type: DdayType.EVENT,
        date: {
            start: date(false, 12, 23),
            end: date(false, 12, 23)
        }
    },
    {
        name: "겨울방학식 및 종업식",
        type: DdayType.EVENT,
        date: {
            start: date(false, 12, 24),
            end: date(false, 12, 2)
        }
    }
];

export default function buildDdayList() {
    const returnValue: ddayListType = [];

    ddays.forEach(dday => returnValue.push(dday));

    return returnValue.sort((a, b) => a.date.start.valueOf() - b.date.start.valueOf());
}
