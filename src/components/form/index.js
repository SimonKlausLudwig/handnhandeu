import React from 'react'
import Swal from 'sweetalert2'

export default function sweetForm(promise, onSuccess) {
    Swal.showLoading()
    return promise().then((d) => {
            return new Promise(r => {
                Swal.fire({
                    title: 'Gut gemacht', text: 'Wir haben deine Anfrag entgegen genommen', icon: 'success', onClose(popup) {
                        r(d);
                    }
                })
            });
        }
    ).catch(e => {
        Swal.fire('Ein Fehler ist aufgetreten', 'Es ist ein Unbekannter Fehler aufgetreten', 'error');
    });
}