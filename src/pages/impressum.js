import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import {e18n} from "../../i18n";

export default () => {
    return (
        <FixedLayout bottom={<Button href={"/"}>{e18n.impressum_button}</Button>}>
            <Header>{e18n.impressum_header}</Header>
            <div>
                Angaben gemäß § 5 TMG

                thebakers UG (haftungsbeschränkt)
                Steinäcker 11/1
                88048 Friedrichshafen


                Kontakt:
                +49 322 133 352 90
                info@videobakers.de

                Vertretungsberechtigte Geschäftsführer:
                Simon Ludwig
                Roman Breyer

                Haftungsausschluss:

                Google Analytics

                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                ​
                Impressum vom Impressum Generator der Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht
            </div>
        </FixedLayout>)
}