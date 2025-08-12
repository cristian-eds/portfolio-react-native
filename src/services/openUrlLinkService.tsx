import { Linking } from "react-native";
import { PrefixUrl } from "../utils/URLPrefix";

const handleLinkToUrl = async (url: string, prefixuRL: PrefixUrl) => {

    const fullUrl = `${prefixuRL}${url}`;

    const supported = await Linking.canOpenURL(fullUrl);

    if (supported) {
        await Linking.openURL(fullUrl);
    }
}

export default handleLinkToUrl;