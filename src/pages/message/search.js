import MessageComponent from "../../components/message";
import React from "react";
import {e18n} from "../../../i18n";
import CreateForm from "../../components/create";

export default () => {
    return (<MessageComponent orange header={e18n.message_search_header}
                              uri={"offer"}
                              alertTitle={e18n.message_search_alert_title}
                              alertDescription={e18n.message_search_alert_description}
                              description={e18n.message_search_description}/>)
}