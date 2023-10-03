import ActivityData from "../classes/ActivityData"
import MainData from "../classes/MainData"
import AverageSessions from "../classes/AverageSessions"
import UserPerformances from "../classes/UserPerformances"

export default function convertData(data, url) {
    function mapper(url) {
        if (url.includes("activity")) {
            return new ActivityData(data.data.userId, data.data.sessions)
        }
        if (url.includes("average")) {
            return new AverageSessions(data.data.userId, data.data.sessions)
        }
        if (url.includes("performance")) {
            return new UserPerformances(data.data.userId, data.data.kind, data.data.data)
        }
        if (!url.includes("activity") || !url.includes("average") || !url.includes("performance")) {
            return new MainData(data.data.id, data.data.userInfos, data.data.todayScore, data.data.score, data.data.keyData)
        }
    }

    return mapper(url)
}