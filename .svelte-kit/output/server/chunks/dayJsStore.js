import dayjs from "dayjs";
import tr from "dayjs/locale/tr.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
dayjs.locale(tr);
