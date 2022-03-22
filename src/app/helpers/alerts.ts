import Swal from 'sweetalert2';

export class alerts{
  // Funcion para mostrar mensajes de error
    static basicAlert(icon: any,title: string, text: string){
        Swal.fire({
            icon: icon,
            toast: true,
            position: 'top-right',
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: false,
            customClass: {
                popup: 'colored-toast'
            }
        })
    }
}
