import { fromEvent } from 'https://dev.jspm.io/rxjs@6/_esm2015';
import { map, filter, switchMap } from 'https://dev.jspm.io/rxjs@6/_esm2015/operators';

(() => {
  const immigration = {
    data: {
      galaxy: null
    },
    observer: {
      form: fromEvent(document.getElementById('form'), 'submit'),
      select: {
        galaxy: fromEvent(document.getElementById('galaxy'), 'change')
      }
    },
    initiate() {
      this.bindEvents();
    },
    bindEvents() {
      this.observer.form.subscribe(this.event.submit)
      this.observer.select.galaxy.subscribe(this.event.pick.galaxy)
    },
    event: {
      pick: {
        galaxy(event) {
          immigration.data.galaxy = event.target.value
          console.log(immigration.data)
        },
      },
      submit(event) {
        event.preventDefault()

        alert('😝')
      }
    }
  }

  immigration.initiate.call(immigration)
})()