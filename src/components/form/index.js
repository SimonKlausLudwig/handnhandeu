import React from 'react'
import Swal from 'sweetalert2'
import {e18n} from "../../../i18n";

export default function sweetForm(promise, title, description) {
    Swal.showLoading()
    return promise().then((d) => {
            return new Promise(r => {
                Swal.fire({
                    title: title, text: description, icon: 'success', onClose(popup) {
                        r(d);
                    }
                })
            });
        }
    ).catch(e => {
        return new Promise(r => {
            Swal.fire({
                title: e18n.error_title, text: e18n.error_text, icon: 'error', onClose(popup) {
                    return r(Promise.reject(new Error('fail')));
                }
            })
        });
    });
}