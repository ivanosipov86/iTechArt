import Swal from 'sweetalert2'

const SwalRequire = require('sweetalert2')

export function success(val){
   Swal.fire({
      position: 'top',
      icon: 'success',
      title: val + ' in successfully',
      showConfirmButton: false,
      timer: 2000,
      background: ' rgb(239, 241, 234)',
      iconColor: 'rgb(123, 212, 160)',
      width: '400px'
    })
}

export function warning(val){
   Swal.fire({
      position: 'top',
      icon: 'warning',
      title: val.message,
      showConfirmButton: false,
      timer: 3000,
      background: ' rgb(239, 241, 234)',
      iconColor: 'rgb(218, 136, 136)',
      width: '400px'
    })
}

export function confirmExit(val, func){
   Swal.fire({
      position: 'top',
      title: 'Are you sure?',
      icon: 'question',
      background: ' rgb(239, 241, 234)',
      showCancelButton: true,
      iconColor: 'rgb(218, 136, 136)',
      confirmButtonColor: 'rgb(123, 212, 160)',
      cancelButtonColor: 'rgb(218, 136, 136)',
      confirmButtonText: 'Yes i am leaving'
      })
      .then(res => {
         if (res.isConfirmed) {
               localStorage.removeItem('uid')
                  setTimeout(() => {
                     val.replace('/');
                     func();
                  }, 1000)
      }
   })
}
