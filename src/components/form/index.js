import React from 'react'
import Swal from 'sweetalert2'
import {e18n} from "../../../i18n";

export default function sweetForm(promise, onSuccess) {
    Swal.showLoading()
    return promise().then((d) => {
            return new Promise(r => {
                Swal.fire({
                    title: e18n.alert_title, text: e18n.alert_text, icon: 'success', onClose(popup) {
                        r(d);
                    }
                })
            });
        }
    ).catch(e => {
        Swal.fire('Ein Fehler ist aufgetreten', 'Es ist ein Unbekannter Fehler aufgetreten', 'error');
    });
}