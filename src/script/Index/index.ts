import InitFirebaseAnalytics from "../Services/Analytics";
import {initCalendar, selectLang, switchResources} from "./UX";
export function IndexFunctions() {
    initCalendar();
    switchResources();
    InitFirebaseAnalytics();
    selectLang();
}


