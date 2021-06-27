(() => {
  const immigration = {
    dom: {
      form: document.getElementById('form'),
    },
    initiate() {
      this.bindEvents();
    },
    bindEvents() {
      this.dom.form.addEventListener('submit', this.event.submit)
    },
    event: {
      submit(event) {
        console.log(event)
        event.preventDefault()
      }
    }
  }

  immigration.initiate.call(immigration)
})()