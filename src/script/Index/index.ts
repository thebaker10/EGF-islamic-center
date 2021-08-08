import InitFirebaseAnalytics from "../Services/Analytics";
import {initCalendar, switchResources} from "./UX";
export function IndexFunctions() {
    initCalendar();
    switchResources();
    InitFirebaseAnalytics();
}


