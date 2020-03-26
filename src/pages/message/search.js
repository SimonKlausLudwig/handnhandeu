import MessageComponent from "../../components/message";
import React from "react";
import {e18n} from "../../../i18n";

export default () => {
    return (<MessageComponent orange header={e18n.message_search_header}
                              uri={"offer"}
                              description={e18n.message_search_description}/>)
}