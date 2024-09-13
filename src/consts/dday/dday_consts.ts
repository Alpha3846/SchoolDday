import { DdayType } from "@/components/modules/dday_box/components/tags/type/type.component";
import dayjs from "dayjs";
import anniversaries from "@/consts/dday/anniversary_consts";
import birthdays from "@/consts/dday/birthday_consts/birthday_consts";
import { getCookie } from "cookies-next";
import { date, everyday } from "./builder";

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
        name: "2학기 1차고사",
        type: DdayType.EXAMINATION,
        date: {
            start: date(false, 10, 30, 8, 50),
            end: date(false, 11, 1, 12, 10)
        }
    },
    {
        name: "10월 전국연합학력평가",
        type: DdayType.HOLIDAY,
        date: {
            start: date(false, 11, 16, 8, 10),
            end: date(false, 11, 16, 17, 45)
        }
    },
    {
        name: "대학수학능력시험",
        type: DdayType.HOLIDAY,
        grades: [3],
        date: {
            start: date(false, 11, 16, 8, 10),
            end: date(false, 11, 16, 17, 45)
        }
    },
];

export default function buildDdayList() {
    const returnValue: ddayListType = [];

    ddays.forEach(dday => returnValue.push(dday));
    anniversaries.forEach(anniversary =>
        returnValue.push({
            name: anniversary.name,
            type: anniversary.isHoliday ? DdayType.HOLIDAY : DdayType.MISCELLANEOUS,
            grades: anniversary.grades,
            date: anniversary.date
        })
    );
    birthdays.forEach(birthdayList => {
        birthdayList.list.forEach(birthday =>
            returnValue.push({
                name: `${birthday.name}의 생일`,
                type: DdayType.BIRTHDAY,
                grades: [birthdayList.grade],
                date: birthday.date
            })
        );
    });

    return returnValue.sort((a, b) => a.date.start.valueOf() - b.date.start.valueOf());
}
