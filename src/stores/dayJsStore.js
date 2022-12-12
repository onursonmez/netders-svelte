import dayjs from 'dayjs'
import tr from 'dayjs/locale/tr'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.locale(tr)

export default dayjs;
