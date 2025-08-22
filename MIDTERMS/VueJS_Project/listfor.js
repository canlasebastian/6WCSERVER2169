const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Clean the Mansion' },
        { text: 'Prepare Dinner' },
        { text: 'Attend WSERVER class!!!' }
      ]
    };
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')
